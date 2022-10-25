import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Layout = () => {
  const [switchOn, setswitchOn] = useState(false)
  return (
    <div className="container-full">
      <h3 className="text-3xl text-center">Layout</h3>
      <section className="section">
        <div
          className="switch"
          onClick={() => setswitchOn(!switchOn)}
          data-ison={switchOn}
        >
          <motion.div
            className="switch-btn"
            layout
            transition={{
              type: 'spring',
              stiffness: 700,
              damping: 30,
            }}
          />
        </div>
      </section>
    </div>
  )
}

export default Layout
