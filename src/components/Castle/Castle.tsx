import type { CastleProps } from "./types";

 const Castle = ({ stage, showDamageEffect = false }: CastleProps) => {
  return (
    <div className="relative w-full h-auto">
      <img
        src={`/assets/castle/Castle_${stage || 0}.png`}
        alt={`Castle Stage ${stage || 0}`}
        className="w-[600px] h-auto"
      />

      {showDamageEffect && (
        <img
          src="/assets/explosion.gif"
          alt="Boom"
          className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[192px] pointer-events-none mix-blend-lighten"
        />
      )}
    </div>
  )
}

export default Castle;
