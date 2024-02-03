import React from 'react'
import '../Css/Login.css'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'


const Login = () => {
  return (
    <motion.div className='login-page'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
    <div className="login">
      <form className="registration-form">
        <h1>Register</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          required
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          required
        />
        <button type="submit">Register</button>
      </form>
      <p className='register-btn'>Already have account? <Link to={'/login'} className='react-link'> <button>Login here!</button></Link></p>
    </div>    
    </motion.div>
  )
}

export default Login