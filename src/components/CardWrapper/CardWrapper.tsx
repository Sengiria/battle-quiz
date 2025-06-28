import { AnimatePresence, motion } from "framer-motion"
import type { CardWrapperProps } from "./types"

 const CardWrapper = ({ children, keyProp }: CardWrapperProps) => {
  return (
    <div
      className="relative w-full max-w-[400px] bg-no-repeat bg-[length:100%_100%] bg-center overflow-hidden transition-all duration-300 z-40"
      style={{ backgroundImage: "url('/assets/bg.png')" }}
    >
      <div className="relative z-10 max-h-[85vh] overflow-y-auto px-2 sm:px-6 sm:py-4 flex flex-col items-center gap-4 m-6 min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={keyProp}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default CardWrapper
