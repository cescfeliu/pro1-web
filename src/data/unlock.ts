export const unlockDates: Record<string, string> = {
  Parcial: '2026-10-09',
  Final: '2026-10-30',
};

export function getUnlockDate(scope: string): string | undefined {
  return unlockDates[scope];
}
