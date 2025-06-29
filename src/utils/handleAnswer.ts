import type { Dispatch, SetStateAction } from 'react';
import type { Question } from '../constants/questions';
import { type GamePhase, PHASE_GAME_OVER, PHASE_WIN } from '../constants/gamePhase';
import { ATTACK_ANIMATION_DURATION, FEEDBACK_DURATION } from '../constants/gameConfig';

export const handleAnswerAnimation = ({
  selected,
  questions,
  currentIndex,
  health,
  setFeedback,
  setShowCardWrapper,
  setShowDamageEffect,
  setCorrectAnswers,
  setShowArmyBoom,
  setHealth,
  setPhase,
  setCurrentIndex,
}: {
  selected: string;
  questions: Question[];
  currentIndex: number;
  health: number;
  setFeedback: Dispatch<SetStateAction<{ selected: string; correct: boolean } | undefined>>;
  setShowCardWrapper: Dispatch<SetStateAction<boolean>>;
  setShowDamageEffect: Dispatch<SetStateAction<boolean>>;
  setCorrectAnswers: Dispatch<SetStateAction<number>>;
  setShowArmyBoom: Dispatch<SetStateAction<boolean>>;
  setHealth: Dispatch<SetStateAction<number>>;
  setPhase: Dispatch<SetStateAction<GamePhase>>;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}) => {
  const current = questions[currentIndex];
  const isCorrect = selected === current.correctAnswer;

  setFeedback({ selected, correct: isCorrect });

  setTimeout(() => {
    setFeedback(undefined);
    setShowCardWrapper(false);

    if (isCorrect) {
      setShowDamageEffect(true);
    } else {
      setShowArmyBoom(true);
    }

    setTimeout(() => {
      if (isCorrect) {
        setCorrectAnswers((prev) => prev + 1);
        setShowDamageEffect(false);
      } else {
        const newHealth = health - 1;
        setHealth(newHealth);

        setTimeout(() => {
          setShowArmyBoom(false);
        }, ATTACK_ANIMATION_DURATION);

        if (newHealth <= 0) {
          setPhase(PHASE_GAME_OVER);
          return;
        }
      }

      setTimeout(() => {
        if (currentIndex + 1 < questions.length) {
          setCurrentIndex((i) => i + 1);
          setShowCardWrapper(true);
        } else {
          setPhase(PHASE_WIN);
        }
      }, ATTACK_ANIMATION_DURATION);
    }, ATTACK_ANIMATION_DURATION);
  }, FEEDBACK_DURATION);
}
