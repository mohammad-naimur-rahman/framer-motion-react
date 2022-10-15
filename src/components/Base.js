import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const baseVariants = {
  init: { opacity: 0, scale: 0.2 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 120,
      mass: 0.2,
      damping: 3,
      when: 'beforeChildren',
      staggerChildren: 1,
    },
  },
  exit: {
    y: '-100vh',
  },
}

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: '0 0 8px #fff',
    boxShadow: '0 0 8px #fff',
    transition: {
      duration: 0.1,
      yoyo: 4,
      //yoyo: Infinity
    },
  },
}

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust']
  return (
    <motion.div
      className="base container"
      variants={baseVariants}
      initial="init"
      animate="animate"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? 'active' : ''
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{
                scale: 1.3,
                originX: 0,
                color: '#f8e112',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className="next"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <Link to="/toppings">
            <motion.button variants={buttonVariants} whileHover="hover">
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Base
