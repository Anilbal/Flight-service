import React from 'react'
import Carousel from '../Components/Carousel'
import MultiCarousel from '../Components/MultiCarousel'
import HomeServices from '../Components/HomeServices'
import {motion} from 'framer-motion'
const Home = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
        <Carousel/>
        <MultiCarousel/>
        <HomeServices/>
    </motion.div>
  )
}

export default Home