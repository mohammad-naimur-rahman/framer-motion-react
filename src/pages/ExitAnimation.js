import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const showExitVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 100,
  },
}

const ExitAnimation = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="w-32 h-32 bg-red-500 rounded"
          variants={showExitVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        ></motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default ExitAnimation
