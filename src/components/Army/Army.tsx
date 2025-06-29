import type { ArmyProps } from "./types"
const base = import.meta.env.BASE_URL;

const Army = ({ health, maxHealth, showBoom = false }: ArmyProps) => {
  const armyImages = [
  `${base}assets/army/army_5.png`,
  `${base}assets/army/army_4.png`,
  `${base}assets/army/army_3.png`,
  `${base}assets/army/army_2.png`,
  `${base}assets/army/army_1.png`,
  ]
  const totalStages = armyImages.length
  const clampedHealth = Math.max(0, Math.min(health, maxHealth)) // just in case
  const progress = 1 - clampedHealth / maxHealth
  const stage = Math.min(totalStages - 1, Math.floor(progress * totalStages))

  return (
    <div className="relative w-full h-[180px] flex items-end justify-center">
      {health > 0 && (
        <img
          src={armyImages[stage]}
          alt={`Army Stage ${stage}`}
          className="max-h-[160px] object-contain transition-all duration-300"
        />
      )}
      {showBoom && (
        <img
          src={`${base}assets/explosion.gif`}
          alt="Boom"
          className="absolute w-[120px] h-[120px] bottom-[10%] mix-blend-lighten pointer-events-none"
        />
      )}
    </div>
  )
}

export default Army
