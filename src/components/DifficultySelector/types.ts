import type { Difficulty } from "../../constants/difficulties"

export type DifficultySelectorProps = {
  selected: Difficulty | null
  onSelect: (difficulty: Difficulty) => void
  onContinue: () => void
}