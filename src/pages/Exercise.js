import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ExitAnimation from './ExitAnimation'

const Exercise = () => {
  const [isVisible, setisVisible] = useState(true)

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
        <p>Exit Animation</p>
        <ExitAnimation isVisible={isVisible} />
        <button onClick={() => setisVisible((isVisible) => !isVisible)}>
          {isVisible ? 'Hide' : 'Show'}
        </button>
      </section>
      <section className="section">
        <p>Keyframes</p>
        <motion.div
          className="w-32 h-32 bg-red-500 rounded"
          animate={{ x: [null, 100, -100, 0] }}
        />
      </section>
      <section className="section">
        <p>While in view</p>
        <motion.div
          className="w-32 h-32 bg-red-500 rounded"
          initial={{ opacity: 1 }}
          whileTap={{ scale: 1.1 }}
          whileHover={{ scale: [null, 1.2, 1] }}
          whileInView={() => {
            console.log('IN VIEW')
            return {}
          }}
        ></motion.div>
      </section>
    </section>
  )
}

export default Exercise
