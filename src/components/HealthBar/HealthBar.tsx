import type { HealthBarProps } from "./types"

 const HealthBar = ({ current, max }: HealthBarProps) => {
  const percentage = Math.max(0, Math.min(100, (current / max) * 100))

  // Determine bar color based on health %
  const getBarColor = () => {
    if (percentage > 66) return 'from-green-600 to-green-400'
    if (percentage > 33) return 'from-yellow-500 to-yellow-300'
    return 'from-red-700 to-red-500'
  }

  return (
    <div className="w-[150px] sm:w-[300px] h-8 border-4 border-[#8B5E3C] rounded-lg bg-[#3b2f2f] relative overflow-hidden shadow-md">
      <div
        className={`h-full bg-gradient-to-r ${getBarColor()} transition-all duration-300 ease-in-out`}
        style={{ width: `${percentage}%` }}
      />
      <div className="absolute inset-0 flex items-center justify-center font-bold text-white text-sm font-mono drop-shadow">
        {current} / {max} HP
      </div>
    </div>
  )
}

export default HealthBar;