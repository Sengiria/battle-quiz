export const getCastleStage = (correctAnswers: number, total: number, maxStage: number) => {
  const ratio = correctAnswers / total
  return Math.min(maxStage, Math.floor(ratio * (maxStage + 1)))
}
