export function getCastleStage(correctAnswers: number, totalQuestions: number, maxStage: number) {
  const ratio = correctAnswers / totalQuestions
  return Math.min(Math.floor(ratio * (maxStage + 1)), maxStage)
}
