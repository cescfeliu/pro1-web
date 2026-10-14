export const unlockDates: Record<string, string | null> = {
  Parcial: null,
  Final: null,
};

// Àmbits que no s'alliberen mai automàticament: sense data publicació,
// només el professorat hi pot entrar.
export const lockedForever: Record<string, boolean> = {
  Final: true,
};

export function getUnlockDate(scope: string): string | undefined {
  return unlockDates[scope] ?? undefined;
}

export function isLockedForever(scope: string): boolean {
  return Boolean(lockedForever[scope]);
}
