import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion/dist/framer-motion'

const Exercise = () => {
  const [isVisible, setisVisible] = useState(false)
  return (
    <section className="container-full">
      <section className="section">
        <p>Easing</p>
        <motion.div
          className="w-32 h-32 bg-red-500 rounded"
          animate={{ x: 200 }}
          transition={{ easing: 'easeOut', duration: 0.5 }}
        ></motion.div>
      </section>
      <section className="section">
        <p>Initial false</p>
        <motion.div
          className="w-32 h-32 bg-red-500 rounded"
          animate={{ x: 200 }}
          initial={false}
        ></motion.div>
      </section>
      <section className="section">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className="w-32 h-32 bg-red-500 rounded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence>
        <button onClick={() => setisVisible((isVisible) => !isVisible)}>
          Toggle Show
        </button>
      </section>
    </section>
  )
}

export default Exercise
