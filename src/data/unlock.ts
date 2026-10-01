export const unlockDates: Record<string, string | null> = {
  Parcial: null,
  Final: '2026-10-30',
};

export function getUnlockDate(scope: string): string | undefined {
  return unlockDates[scope] ?? undefined;
}
