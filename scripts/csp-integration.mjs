import { createHash } from 'node:crypto';
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Afegeix a cada pàgina HTML generada una meta-CSP amb l'hash SHA-256 de tots
 * els seus scripts inline:
 *
 *   <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'sha256-…'">
 *
 * El header de vercel.json manté `script-src 'self' 'unsafe-inline'` a propòsit:
 * les dues policies s'apliquen per intersecció, així que la meta és l'efectiva
 * (només s'executen els scripts coneguts a build) i, si per algun motiu la meta
 * faltés, el comportament seria el d'avui (fail-open, cap trencament).
 */

const EXISTING_META = /<meta\s+http-equiv="Content-Security-Policy"[^>]*>\s*/gi;
const SCRIPT_TAG = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
const HAS_SRC = /\ssrc\s*=/i;

function scriptHash(content) {
  return "'sha256-" + createHash('sha256').update(content, 'utf8').digest('base64') + "'";
}

async function collectHtml(dir) {
  const entries = await readdir(dir, { recursive: true, withFileTypes: true });
  return entries
    .filter(entry => entry.isFile() && entry.name.endsWith('.html'))
    .map(entry => path.join(entry.parentPath ?? entry.path, entry.name));
}

function processHtml(html, file) {
  const hashes = [];
  let match;
  SCRIPT_TAG.lastIndex = 0;
  while ((match = SCRIPT_TAG.exec(html)) !== null) {
    const [, attrs, content] = match;
    if (HAS_SRC.test(attrs)) continue;
    const hash = scriptHash(content);
    if (!hashes.includes(hash)) hashes.push(hash);
  }

  // Idempotència: treu la meta anterior si n'hi ha
  html = html.replace(EXISTING_META, '');

  const directive = ['script-src', "'self'", ...hashes].join(' ');
  const metaTag = `<meta http-equiv="Content-Security-Policy" content="${directive}">`;

  const headMatch = html.match(/<head[^>]*>/i);
  if (!headMatch) throw new Error(`[csp] ${file}: no s'ha trobat <head>`);

  // Situa la meta el més aviat possible (abans de qualsevol script inline)
  let insertAt = headMatch.index + headMatch[0].length;
  const afterHead = html.slice(insertAt);
  const charset = afterHead.match(/^\s*<meta\s+charset[^>]*>/i);
  if (charset) insertAt += charset[0].length;

  html = html.slice(0, insertAt) + '\n    ' + metaTag + html.slice(insertAt);

  // Verificació: tot script inline ha de tenir el seu hash a la meta
  SCRIPT_TAG.lastIndex = 0;
  while ((match = SCRIPT_TAG.exec(html)) !== null) {
    if (HAS_SRC.test(match[1])) continue;
    const hash = scriptHash(match[2]);
    if (!html.includes(hash)) {
      throw new Error(`[csp] ${file}: hash absent a la meta (${hash})`);
    }
  }

  return { html, count: hashes.length };
}

export default function cspIntegration() {
  return {
    name: 'csp-inline-script-hashes',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const outDir = fileURLToPath(dir);
        const files = await collectHtml(outDir);
        let total = 0;
        for (const file of files) {
          const original = await readFile(file, 'utf8');
          const { html, count } = processHtml(original, file);
          if (html !== original) await writeFile(file, html);
          total += count;
        }
        console.log(`[csp] ${files.length} pàgines amb CSP per hash (${total} referències)`);
      },
    },
  };
}
