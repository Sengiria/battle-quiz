export const CATEGORY_HISTORY = 'History';
export const CATEGORY_GEOGRAPHY = 'Geography';
export const CATEGORY_VIDEO_GAMES = 'Video Games';
export const CATEGORY_MOVIES = 'Movies';
export const CATEGORY_GENERAL = 'General';
export const CATEGORY_RANDOM = 'Random';
export const CATEGORY_MUSIC = 'Music';
export const CATEGORY_SPORT = 'Sport';

export const ALL_CATEGORIES: Category[] = [
  CATEGORY_HISTORY,
  CATEGORY_GEOGRAPHY,
  CATEGORY_VIDEO_GAMES,
  CATEGORY_MOVIES,
  CATEGORY_GENERAL,
  CATEGORY_MUSIC,
  CATEGORY_SPORT
]

export type Category = typeof CATEGORY_HISTORY | typeof CATEGORY_VIDEO_GAMES | typeof CATEGORY_GEOGRAPHY | typeof CATEGORY_MOVIES | typeof CATEGORY_GENERAL | typeof CATEGORY_MUSIC | typeof CATEGORY_SPORT  


export const ALL_WITH_RANDOM: (Category | typeof CATEGORY_RANDOM)[] = [CATEGORY_RANDOM, ...ALL_CATEGORIES]