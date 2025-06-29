export const DIFFICULTY_EASY = 'Easy'
export const DIFFICULTY_MEDIUM = 'Medium'
export const DIFFICULTY_HARD = 'Hard'
export const DIFFICULTY_HARDCORE = 'Hardcore'
export type Difficulty = typeof DIFFICULTY_EASY | typeof DIFFICULTY_MEDIUM | typeof DIFFICULTY_HARD | typeof DIFFICULTY_HARDCORE

export const DIFFICULTY_SETTINGS: Record<Difficulty, { hp: number; questionCount: number }> = {
  [DIFFICULTY_EASY]: { hp: 5, questionCount: 10 },
  [DIFFICULTY_MEDIUM]: { hp: 4, questionCount: 12 },
  [DIFFICULTY_HARD]: { hp: 3, questionCount: 15 },
  [DIFFICULTY_HARDCORE]: { hp: 1, questionCount: 20 },
}
