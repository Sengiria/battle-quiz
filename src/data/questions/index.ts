import { generalKnowledgeQuestions } from "./general";
import { geographyQuestions } from "./geography";
import { historyQuestions } from "./history";
import { movieQuestions } from "./movies";
import { videoGamesQuestions } from "./videoGames";

export const QUESTIONS = [
  ...generalKnowledgeQuestions,
  ...historyQuestions,
  ...geographyQuestions,
  ...videoGamesQuestions,
  ...movieQuestions,

];