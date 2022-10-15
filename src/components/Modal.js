import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const Modal = ({ show }) => {
  const modalVariants = {
    init: {
      y: '-100vw',
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1,
      },
    },
    exit: {
      y: '-100vw',
      opacity: 0,
    },
  }
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          variants={modalVariants}
          initial="init"
          animate="animate"
          exit="exit"
          className="p-8 border border-blue-700 rounded bg-white bg-transparent-80"
        >
          <h1 className="text-black">Thanks for ordering!</h1>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
