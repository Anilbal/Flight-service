import React from 'react'
import '../Css/Contact.css'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <motion.div className='contact'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
        <div className="contact-page">
      <form  className="contact-form">
        <h1>Contact Us</h1>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
    </motion.div>
  )
}

export default Contact