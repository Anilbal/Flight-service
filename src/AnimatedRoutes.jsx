import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomeLayout from './Layout/HomeLayout'
import Home from './Page/Home'
import Login from './Page/Login'
import Register from './Page/Register'
import Contact from './Page/Contact'
import Services from './Page/Services'
import Pages from './Page/Pages'
import AboutUs from './Page/AboutUs'
import { AnimatePresence } from 'framer-motion'
const AnimatedRoutes = () => {
    const location=useLocation()
  return (
    <>
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<HomeLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='services' element={<Services/>}/>
          <Route path='pages' element={<Pages/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='aboutus' element={<AboutUs/>}/>
        </Route>
        </Routes>  
        </AnimatePresence>
    </>
  )
}

export default AnimatedRoutes