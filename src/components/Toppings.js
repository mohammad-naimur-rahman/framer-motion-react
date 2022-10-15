import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { containerVariants } from './Home'

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    'Mushrooms',
    'Peppers',
    'Onions',
    'Olives',
    'Extra cheese',
    'Tomatoes',
  ]

  return (
    <motion.div
      className="toppings container"
      variants={containerVariants}
      initial="init"
      animate="animate"
      exit="exit"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : ''
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              whileHover={{
                scale: 1.3,
                originX: 0,
                color: '#f8e112',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
          whileHover={{
            scale: [1, 1.1, 1, 1.05, 1],
            duration: 0.1,
            textShadow: '0 0 8px #fff',
            boxShadow: '0 0 8px #fff',
          }}
        >
          Order
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Toppings
