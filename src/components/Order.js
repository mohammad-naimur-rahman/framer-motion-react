import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { baseVariants } from './Base'

const childVariants = {
  init: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
}

const Order = ({ pizza }) => {
  const [showModal, setshowModal] = useState(true)

  setTimeout(() => {
    setshowModal(false)
  }, 3000)
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="container order border rounded shadow-lg"
          variants={baseVariants}
          initial="init"
          animate="animate"
          exit="exit"
        >
          <motion.h2>Thank you for your order :)</motion.h2>
          <motion.div variants={childVariants}>
            <p>You ordered a {pizza.base} pizza with:</p>
          </motion.div>
          <motion.div variants={childVariants}>
            {pizza.toppings.map((topping) => (
              <div key={topping}>{topping}</div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Order
