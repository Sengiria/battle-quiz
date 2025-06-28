import React from 'react'
import { DIFFICULTY_SETTINGS, type Difficulty } from '../../constants/difficulties'

type Props = {
  selected: Difficulty | null
  onSelect: (difficulty: Difficulty) => void
  onContinue: () => void
}

const DifficultySelector: React.FC<Props> = ({ selected, onSelect, onContinue }) => {
  const difficulties: Difficulty[] = ['Easy', 'Medium', 'Hard', 'Hardcore']

  return (
    <div className="w-full text-center">
      <h2 className="text-lg sm:text-xl text-shadow-lg text-[#795649] font-bold text-center drop-shadow w-full my-6">
        Select Difficulty
      </h2>

      <div className="grid grid-cols-2 gap-2 max-w-sm mx-auto">
        {difficulties.map((difficulty) => {
          const isSelected = selected === difficulty
          return (
            <button
              key={difficulty}
              onClick={() => onSelect(difficulty)}
              className={`px-3 py-2 text-sm rounded font-serif transition cursor-pointer
                border-2 border-[#c0a080]
                ${isSelected
                  ? 'bg-[#a67c52] text-white shadow-[0px_0_5px_5px_rgba(255,255,255,0.3)]'
                  : 'bg-[radial-gradient(circle,_#e7d2aa,_#d6c095)] text-[#4b3a2f] hover:shadow-[0px_0_5px_5px_rgba(255,255,255,0.2)]'}
                shadow-[2px_2px_0px_#a67c52]
                active:shadow-[inset_1px_1px_2px_rgba(0,0,0,0.4)]
                active:translate-y-[2px]`}
            >
              {difficulty}
            </button>
          )
        })}
      </div>

      {/* Tooltip */}
      {selected && (
        <p className="text-sm text-[#4b3a2f] mt-4 font-light">
          {selected} Mode: {DIFFICULTY_SETTINGS[selected].questionCount} questions,
          {` `}{DIFFICULTY_SETTINGS[selected].hp} HP.
        </p>
      )}

      {/* Continue button */}
      <div className="mt-4">
        <button
          disabled={!selected}
          onClick={onContinue}
          className="mt-2 px-4 py-2 text-sm rounded border-2 font-semibold font-serif transition
            text-[#f4e5c3] border-[#c0a080] cursor-pointer
                 bg-[radial-gradient(circle,_#795649,_#5b3b2b)]
                 hover:bg-[radial-gradient(circle,_#a1784d,_#5b3b2b)]
                 hover:shadow-[0px_0_5px_5px_rgba(255,255,255,0.1)]
                 active:shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5)] active:translate-y-[2px]"
            
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default DifficultySelector
