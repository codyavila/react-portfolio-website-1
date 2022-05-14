import React from 'react'
import './contact.css'
import { RiMailSendFill } from 'react-icons/ri'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className="contact_options">
          <article className='contact_option'>
            <RiMailSendFill className='contact_option-icon' />
            <h4>Email</h4>
            <h5>cody.sanders.developer@gmail.com</h5>
            <a href='mailto:cody.sanders.developer@gmail.com' target='_blank' rel='noreferrer'>Send a message</a>
          </article>
        </div>
        <form action="">
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact