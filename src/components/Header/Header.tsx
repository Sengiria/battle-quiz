import HealthBar from '../HealthBar/HealthBar'
import type { HeaderProps } from './types'

const Header = ({ current, total, health, maxHealth, difficulty }: HeaderProps) => {
  return (
    <div className="w-full min-h-[50px] flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 px-4 py-2 bg-[#f4e5c3] border-b border-[#c0a080] shadow text-[#4b3a2f] text-sm sm:text-base font-serif text-center">
      
      <div className="flex-1 sm:text-left">
        {total > 0 && `Question ${current + 1} / ${total}`}
      </div>

      <div className="flex-1 font-bold text-center text-base sm:text-lg">
        🗡️ Battle Quiz
        {difficulty && (
          <span className="block sm:inline text-xs sm:text-sm ml-2 font-normal">
            ({difficulty})
          </span>
        )}
      </div>
      <div className="flex-1 flex justify-center sm:justify-end">
        {total > 0 && <HealthBar current={health} max={maxHealth} />}
      </div>
    </div>
  )
}


export default Header
