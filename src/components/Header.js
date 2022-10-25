import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

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
  return (
    <header>
      <motion.div
        className="logo"
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        dragElastic={0.2}
        dragMomentum={false}
      >
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
      </motion.div>
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
        <h1>
          <Link to="/">Pizza Joint</Link>
        </h1>
        <ul className="flex mt-2">
          <li className="text-sm border rounded px-3 py-1 mx-2">
            <Link to="/overview">Overview</Link>
          </li>
        </ul>
      </motion.div>
    </header>
  )
}

export default Header
