import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const Modal = () => {
  const [showModal, setshowModal] = useState(false)
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div>
          <h1>hi</h1>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
