export type QuestionsContentProps = {
  question: string;
  answers: string[];
  onSelect: (answer: string) => void;
  feedback?: { selected: string; correct: boolean };
  correctAnswer?: string;
}
