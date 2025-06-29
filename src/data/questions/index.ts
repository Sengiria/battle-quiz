import { artQuestions } from "./art";
import { generalKnowledgeQuestions } from "./general";
import { geographyQuestions } from "./geography";
import { historyQuestions } from "./history";
import { marvelQuestions } from "./marvel";
import { movieQuestions } from "./movies";
import { sportQuestions } from "./sport";
import { videoGamesQuestions } from "./videoGames";

export const QUESTIONS = [
  ...generalKnowledgeQuestions,
  ...historyQuestions,
  ...geographyQuestions,
  ...videoGamesQuestions,
  ...movieQuestions,
  ...sportQuestions,
  ...artQuestions,
  ...marvelQuestions
];