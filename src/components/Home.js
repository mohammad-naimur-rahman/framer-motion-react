import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      className="home container"
      initial={{ y: 500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <motion.h2
        animate={{
          fontSize: 50,
        }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button whileHover={{ scale: 1.1 }}>
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home
