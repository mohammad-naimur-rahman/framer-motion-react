import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ExitAnimation from './ExitAnimation'

const Overview = () => {
  const [isVisible, setisVisible] = useState(true)

  const parentsVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        when: 'beforeChildren',
        delayChildren: 1,
      },
    },
  }

  const childVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const itemsVariants = {
    initial: {
      x: -300,
      opacity: 0,
    },
    animate: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
      },
    }),
  }

  return (
    <section className="container-full">
      <h3 className="text-3xl text-center">Overview</h3>
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
      <section className="section">
        <p>Delay: Before children</p>
        <motion.div
          className="w-32 h-32 bg-red-500 rounded flex items-center justify-center"
          variants={parentsVariants}
          initial="initial"
          animate="animate"
        >
          <motion.p variants={childVariants}>Come later</motion.p>
        </motion.div>
      </section>
      <section className="section">
        <p>Dynamic Variants</p>
        {[0, 1, 2, 3].map((i) => (
          <motion.p
            key={i}
            className="w-48 h-12 bg-red-500 rounded flex items-center justify-center my-3"
            custom={i}
            variants={itemsVariants}
            initial="initial"
            animate="animate"
          >
            Item number {i + 1}
          </motion.p>
        ))}
      </section>
    </section>
  )
}

export default Overview
