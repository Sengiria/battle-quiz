import type { Difficulty } from "../../constants/difficulties"

export type HeaderProps = {
  current: number
  total: number
  health: number
  maxHealth: number
  difficulty?: Difficulty
}
