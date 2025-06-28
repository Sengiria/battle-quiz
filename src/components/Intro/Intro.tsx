const Intro: React.FC<{ visible: boolean }> = ({ visible }) => {
  return (
    <div
      className={`absolute inset-0 z-40 flex flex-col items-start justify-start text-start px-4 mt-30
        transition-opacity duration-1000
        ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
    >
      <div className="space-y-4 mb-8">
        <p className="text-[#fbe9d0] text-lg sm:text-3xl font-serif opacity-0 [animation:fade-up_0.8s_ease-out_0s_forwards] drop-shadow-[0_2px_2px_rgba(60,30,10,0.8)]">
          🌍 The world lies in chaos...
        </p>
        <p className="text-[#fbe9d0] text-lg sm:text-3xl font-serif opacity-0 [animation:fade-up_0.8s_ease-out_1s_forwards] drop-shadow-[0_2px_2px_rgba(60,30,10,0.8)]">
          🧠 But knowledge is power.
        </p>
        <p className="text-[#fbe9d0] text-lg sm:text-3xl font-serif opacity-0 [animation:fade-up_0.8s_ease-out_2s_forwards] drop-shadow-[0_2px_2px_rgba(60,30,10,0.8)]">
          ⚔️ Answer wisely...
        </p>
        <p className="text-[#fbe9d0] text-lg sm:text-3xl font-serif opacity-0 [animation:fade-up_0.8s_ease-out_3s_forwards] drop-shadow-[0_2px_2px_rgba(60,30,10,0.8)]">
          👑 ...and you might conquer it all!
        </p>
      </div>
    </div>
  )
}

export default Intro
