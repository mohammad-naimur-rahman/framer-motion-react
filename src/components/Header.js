import React from 'react'
import { useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'

const svgVariants = {
  init: {
    rotate: -180,
  },
  animate: {
    rotate: 0,
    transition: {
      duration: 1,
    },
  },
}

const pathVariants = {
  init: {
    opacity: 0,
    pathLength: 0,
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
}

const Header = () => {
  const history = useHistory()
  return (
    <header>
      <div className="logo" onClick={() => history.push('/')}>
        <motion.svg
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          variants={svgVariants}
          initial="init"
          animate="animate"
        >
          <motion.path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            variants={pathVariants}
          />
          <motion.path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            variants={pathVariants}
          />
        </motion.svg>
      </div>
      <motion.div
        className="title"
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{
          type: 'spring',
          duration: 0.3,
          stiffness: 80,
          mass: 1,
          damping: 12,
        }}
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  )
}

export default Header
