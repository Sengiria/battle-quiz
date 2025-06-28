import type { QuestionsContentProps } from './types'

const QuestionsContent = ({ question, answers, onSelect, feedback, correctAnswer }: QuestionsContentProps) => {
  return (
    <>
      <h2 className="text-lg sm:text-xl text-shadow-lg text-[#795649] font-bold text-center drop-shadow p-2 w-full h-20 mt-4">
        {question}
      </h2>

      <div className="w-full flex flex-col items-center gap-3 p-6">
        {answers.map((answer, index) => {
          const isSelected = feedback?.selected === answer
          const isCorrectAnswer = correctAnswer === answer
          const isWrong = isSelected && !feedback?.correct

          return (
            <button
              key={index}
              onClick={() => onSelect(answer)}
              disabled={!!feedback}
              className={`px-4 py-2 w-full text-sm font-serif rounded border-2 transition-all duration-300 ease-in-out
                cursor-pointer
                text-[#f4e5c3] border-[#c0a080]
                shadow-[2px_2px_0px_#a67c52] 
                bg-[radial-gradient(circle,_#795649,_#5b3b2b)]
                hover:bg-[radial-gradient(circle,_#a1784d,_#5b3b2b)]
                hover:shadow-[0px_0_5px_5px_rgba(255,255,255,0.1)]
                active:shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5)] 
                active:translate-y-[2px]
                ${feedback
                  ? isCorrectAnswer
                    ? 'bg-green-300 border-green-700 text-green-900'
                    : isWrong
                      ? 'bg-red-300 border-red-700 text-red-900'
                      : 'opacity-50 cursor-not-allowed'
                  : ''
                }`}
            >
              {answer}
            </button>
          )
        })}
      </div>
    </>
  )
}

export default QuestionsContent;
