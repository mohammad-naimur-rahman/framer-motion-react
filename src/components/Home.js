import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const buttonVariants = {
  hover: {
    scale: [1, 1.1, 1, 1.05, 1],
    textShadow: '0 0 8px #fff',
    boxShadow: '0 0 8px #fff',
    transition: {
      duration: 0.3,
      type: 'spring',
      stiffness: 200,
    },
  },
}

export const containerVariants = {
  init: {
    opacity: 0,
    x: '100vw',
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: '-100vw',
  },
}

const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={containerVariants}
      initial="init"
      animate="animate"
      exit="exit"
    >
      <motion.h2
        initial={{
          y: 100,
        }}
        animate={{
          y: 0,
        }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          //animate="visible"
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home
