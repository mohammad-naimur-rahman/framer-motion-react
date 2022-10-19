import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { containerVariants } from './Home'
import Modal from './Modal'

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
    <motion.div
      className="container order"
      variants={containerVariants}
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
      <Modal show={showModal} />
    </motion.div>
  )
}

export default Order
