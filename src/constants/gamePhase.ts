export const PHASE_DIFFICULTY = 'selectingDifficulty'
export const PHASE_CATEGORY = 'selectingCategories'
export const PHASE_PLAY = 'playing'
export const PHASE_GAME_OVER = 'gameOver'
export const PHASE_WIN = 'win'

export type GamePhase = typeof PHASE_DIFFICULTY | typeof PHASE_CATEGORY | typeof PHASE_PLAY | typeof PHASE_GAME_OVER | typeof PHASE_WIN; 