export const LEVELS = [
  { code: 'A1', name: 'Breakthrough', filled: 1 },
  { code: 'A2', name: 'Waystage', filled: 2 },
  { code: 'B1', name: 'Threshold', filled: 3 },
  { code: 'B2', name: 'Vantage', filled: 4 },
  { code: 'C1', name: 'Effective Operational Proficiency', filled: 5 },
] as const;

export type LevelCode = (typeof LEVELS)[number]['code'];
