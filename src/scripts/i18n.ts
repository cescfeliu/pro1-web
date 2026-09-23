import ca from '../i18n/ca.json';
import es from '../i18n/es.json';
import en from '../i18n/en.json';

const translations: Record<string, any> = { ca, es, en };

function getNestedValue(obj: any, path: string): string | undefined {
  return path.split('.').reduce((acc, part) => acc?.[part], obj);
}

export function setLanguage(lang: string) {
  if (!translations[lang]) return;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  applyTranslations(lang);
}

export function getLanguage(): string {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem('lang') || detectLanguage();
  }
  return 'ca';
}

function detectLanguage(): string {
  const nav = navigator.language;
  if (nav.startsWith('es')) return 'es';
  if (nav.startsWith('en')) return 'en';
  return 'ca';
}

export function applyTranslations(lang: string) {
  const t = translations[lang] || translations.ca;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key) {
      const value = getNestedValue(t, key);
      if (value) el.textContent = value;
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key) {
      const value = getNestedValue(t, key);
      if (value) el.setAttribute('placeholder', value);
    }
  });
}

export function initI18n() {
  const lang = getLanguage();
  applyTranslations(lang);
}
