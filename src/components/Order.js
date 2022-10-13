import React from 'react'
import { motion } from 'framer-motion'
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
  return (
    <motion.div
      className="container order"
      variants={baseVariants}
      initial="init"
      animate="animate"
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
  )
}

export default Order
