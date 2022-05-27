import React, { useRef } from 'react'
import './contact.css'
import { RiMailSendFill } from 'react-icons/ri'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pjmfyeq', 'template_szapo02', form.current, '8lra3CMMTMLjXT17X')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

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
        <form ref={form} onSubmit={sendEmail}>
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