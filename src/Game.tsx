import { useEffect, useState } from 'react'
import { DIFFICULTY_EASY, DIFFICULTY_SETTINGS, type Difficulty } from './constants/difficulties'
import CardWrapper from './components/CardWrapper/CardWrapper'
import CategorySelector from './components/CategorySelector/CategorySelector'
import QuestionContent from './components/QuestionsContent/QuestionsContent'
import { getRandomQuestions } from './utils/getRandomQuestions'
import { PHASE_CATEGORY, PHASE_DIFFICULTY, PHASE_GAME_OVER, PHASE_PLAY, PHASE_WIN, type GamePhase } from './constants/gamePhase'
import { ALL_CATEGORIES, ALL_WITH_RANDOM, CATEGORY_RANDOM, type Category } from './constants/categories'
import type { Question } from './constants/questions'
import Header from './components/Header/Header'
import Castle from './components/Castle/Castle'
import Army from './components/Army/Army'
import Intro from './components/Intro/Intro'
import GameEndScreen from './components/EndScreen/EndScreen'
import DifficultySelector from './components/DifficultySelector/DifficultySelector'

const MAX_CASTLE_STAGE = 7

function getCastleStage(correctAnswers: number, total: number, maxStage: number) {
  const ratio = correctAnswers / total
  return Math.min(maxStage, Math.floor(ratio * (maxStage + 1)))
}

const Game = ({ isTest = false }: { isTest?: boolean }) => {
  const [phase, setPhase] = useState<GamePhase>(PHASE_DIFFICULTY)
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([])
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>(DIFFICULTY_EASY)
  const hp = selectedDifficulty ? DIFFICULTY_SETTINGS[selectedDifficulty].hp : 0
  const questionCount = selectedDifficulty ? DIFFICULTY_SETTINGS[selectedDifficulty].questionCount : 0
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [health, setHealth] = useState(hp)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [feedback, setFeedback] = useState<{ selected: string; correct: boolean } | undefined>()
  const [showCardWrapper, setShowCardWrapper] = useState(false)
  const [showDamageEffect, setShowDamageEffect] = useState(false)
  const [showArmyBoom, setShowArmyBoom] = useState(false)
  const [showIntro, setShowIntro] = useState(true)
  const [introVisible, setIntroVisible] = useState(true)

  useEffect(() => {
    if (isTest) {
      setIntroVisible(false)
      setShowIntro(false)
      return
    }
    const timer = setTimeout(() => {
      setIntroVisible(false) // start fade-out
      setTimeout(() => setShowIntro(false), 1000) // remove from DOM after fade-out
    }, 4500)

    return () => clearTimeout(timer)
  }, [isTest])


  const handleCategoryChange = (category: Category | typeof CATEGORY_RANDOM) => {
    if (category === CATEGORY_RANDOM) {
      setSelectedCategories([...ALL_CATEGORIES.sort(() => 0.5 - Math.random())])
    } else {
      setSelectedCategories((prev) =>
        prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
      )
    }
  }

  const startGame = () => {
    if (selectedCategories.length === 0) return
    const selected = getRandomQuestions(questionCount, selectedCategories)
    setQuestions(selected)
    setCurrentIndex(0)
    setHealth(hp)
    setCorrectAnswers(0)
    setPhase(PHASE_PLAY)
  }

  const handleAnswer = (selected: string) => {
    const current = questions[currentIndex]
    const isCorrect = selected === current.correctAnswer
    setFeedback({ selected, correct: isCorrect })

    // Step 1: Show feedback for a short time
    setTimeout(() => {
      setFeedback(undefined)
      setShowCardWrapper(false)

      if (isCorrect) {
        setShowDamageEffect(true) // attack castle
      } else {
        setShowArmyBoom(true) // attack army
      }

      // Step 2: Wait for animation
      setTimeout(() => {
        if (isCorrect) {
          setCorrectAnswers((prev) => prev + 1)
          setShowDamageEffect(false)
        } else {
          const newHealth = health - 1
          setHealth(newHealth)

          setTimeout(() => {
            setShowArmyBoom(false)
          }, 1500)

          if (newHealth <= 0) {
            setPhase(PHASE_GAME_OVER)
            return
          }
        }

        // Step 3: Delay before showing the next question
        setTimeout(() => {
          if (currentIndex + 1 < questions.length) {
            setCurrentIndex((i) => i + 1)
            setShowCardWrapper(true)
          } else {
            setPhase(PHASE_WIN)
          }
        }, 1500)
      }, 1500)
    }, 1000)
  }

  useEffect(() => {
    if (isTest) {
      setShowCardWrapper(true)
      return
    }
    const delay = setTimeout(() => {
      setShowCardWrapper(true);
    }, 4000);

    return () => clearTimeout(delay);
  }, []);

  const current = questions[currentIndex]
  const castleStage = getCastleStage(correctAnswers, questions.length, MAX_CASTLE_STAGE)

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/backgrounds/battlefield.png"
          alt="Battlefield"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Intro */}
      {showIntro && <Intro visible={introVisible} />}

      {/* Castle */}
      <div
        className="absolute left-1/2 top-[30%] sm:top-[10%] z-10 transition-opacity duration-1000 ease-out opacity-0 animate-[fadeInSlide_1s_ease-out_0.2s_forwards]"
        style={{ transform: 'translateX(-50%)', width: '600px', maxWidth: '80vw' }}
      >
        <Castle stage={castleStage} showDamageEffect={showDamageEffect} />
      </div>

      {/* Army */}
      <div
        className="absolute bottom-[10%] left-1/2 z-10 opacity-0 
  [animation:fadeInSlide_1s_ease-out_1.5s_forwards] 
  transition-opacity duration-1000 ease-out"
        style={{ transform: 'translateX(-50%)', width: '600px', maxWidth: '80vw' }}
      >
        <Army health={health} maxHealth={hp} showBoom={showArmyBoom} />
      </div>

      {/* Header */}
      <div className="relative z-20">
        <Header
          current={currentIndex}
          total={questions.length}
          health={health}
          maxHealth={hp}
          difficulty={selectedDifficulty}
        />
      </div>

      {/* Game Content */}
      <div className="relative z-30 flex-1 flex justify-center items-center pt-[15vh] sm:pt-[25vh]">
        {showCardWrapper && (
          <CardWrapper keyProp={phase + currentIndex}>
            {phase === PHASE_DIFFICULTY && (
              <DifficultySelector
                selected={selectedDifficulty}
                onSelect={setSelectedDifficulty}
                onContinue={() => setPhase(PHASE_CATEGORY)}
              />
            )}

            {phase === PHASE_CATEGORY && (
              <div className="flex flex-col items-center gap-4 w-full">
                <CategorySelector
                  categories={ALL_WITH_RANDOM}
                  selected={selectedCategories}
                  onChange={handleCategoryChange}
                />
                <button
                  onClick={startGame}
                  disabled={selectedCategories.length === 0}
                  className={`my-2 px-4 text-base sm:text-lg py-2 rounded
                    ${selectedCategories.length === 0
                      ? 'bg-gray-400 text-white cursor-not-allowed opacity-25'
                      : `bg-[radial-gradient(circle,_#795649,_#5b3b2b)]
                         hover:bg-[radial-gradient(circle,_#a1784d,_#5b3b2b)]
                         hover:shadow-[0px_0_5px_5px_rgba(255,255,255,0.1)]
                         active:shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5)]
                         active:translate-y-[2px] cursor-pointer`
                    }`}
                >
                  Start Game
                </button>
              </div>
            )}

            {phase === PHASE_PLAY && current && (
              <QuestionContent
                question={current.question}
                answers={current.answers}
                onSelect={handleAnswer}
                feedback={feedback}
                correctAnswer={current.correctAnswer}
              />
            )}

            {phase === PHASE_GAME_OVER && (
              <h2 className="text-xl text-red-700 font-bold text-center w-full">Game Over! 😢</h2>
            )}



          </CardWrapper>
        )}
      </div>

      {(phase === PHASE_WIN || phase === PHASE_GAME_OVER) && (
        <GameEndScreen
          type={phase}
          onRestart={() => {
            setPhase(PHASE_DIFFICULTY)
            setQuestions([])
            setSelectedCategories([])
            setCurrentIndex(0)
            setCorrectAnswers(0)
            setHealth(hp)
            setShowCardWrapper(false)
            setTimeout(() => setShowCardWrapper(true), 400) // reuse delayed mount
          }}
        />
      )}
    </div>
  )
}

export default Game;