import React from 'react'
import {motion} from 'framer-motion'

const Pages = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >Pages</motion.div>
  )
}

export default Pages