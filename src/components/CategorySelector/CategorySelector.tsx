import { CATEGORY_RANDOM } from "../../constants/categories"
import type { CategorySelectorProps } from "./types"

const CategorySelector = ({ categories, selected, onChange }: CategorySelectorProps) => {
  return (
    <div className="w-full text-center">
      <h2 className="text-lg sm:text-xl text-shadow-lg text-[#795649] font-bold text-center drop-shadow w-full my-6">
        Select Categories
      </h2>
<div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto pr-2 pb-4">
        {categories.map((category) => {
          const isRandom = category === CATEGORY_RANDOM
          const isSelected = !isRandom && selected.includes(category)

          return (
            <button
              key={category}
              disabled={isRandom && selected.length > 0}
              onClick={() => onChange(category)}
              className={`px-3 py-2 text-sm rounded font-serif transition cursor-pointer
                  border-2 border-[#c0a080]
                  ${isSelected
                  ? 'bg-[#a67c52] text-white shadow-[0px_0_5px_5px_rgba(255,255,255,0.3)]'
                  : 'bg-[radial-gradient(circle,_#e7d2aa,_#d6c095)] text-[#4b3a2f] hover:shadow-[0px_0_5px_5px_rgba(255,255,255,0.2)]'}
                    shadow-[2px_2px_0px_#a67c52]
                    active:shadow-[inset_1px_1px_2px_rgba(0,0,0,0.4)]
                    active:translate-y-[2px]
                    ${isRandom && selected.length > 0 && 'cursor-not-allowed'}
`}
            >
              {category}
            </button>
          )
        })}

      </div>

    </div>
  )
}

export default CategorySelector;
