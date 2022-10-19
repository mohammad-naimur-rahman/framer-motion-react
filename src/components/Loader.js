import React from 'react'
import { motion, useCycle } from 'framer-motion'

const loaderVariants = {
  animate: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: 'easeOut',
      },
    },
  },
  animate2: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        easing: 'easeOut',
      },
    },
  },
}

const Loader = () => {
  const [animation, cycleAnimation] = useCycle('animate', 'animate2')
  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}
      ></motion.div>
      <p className="animate-change-btn" onClick={cycleAnimation}>
        Change animation
      </p>
    </>
  )
}

export default Loader
