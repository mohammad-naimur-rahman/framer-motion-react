import React from 'react'
import { motion } from 'framer-motion'

const Exercise = () => {
  return (
    <section class="container-full">
      <section className="section">
        <motion.div
          className="w-32 h-32 bg-red-500 rounded"
          animate={{ x: 200 }}
          transition={{ easing: 'easeOut', duration: 0.5 }}
        ></motion.div>
      </section>
    </section>
  )
}

export default Exercise
