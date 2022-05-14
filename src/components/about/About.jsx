import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {RiAwardLine} from 'react-icons/ri'
import {FaCodeBranch} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me!</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='About' />
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <RiAwardLine className='about_icon' />
              <h5>Experience</h5>
              <small>1 Year</small>
            </article>

            <article className='about_card'>
              <FaCodeBranch className='about_icon' />
              <h5>Projects</h5>
              <small>5 Projects and Counting</small>
            </article>

            <article className='about_card'>
              <RiAwardLine className='about_icon' />
              <h5>General Assembly Graduate</h5>
              <small>480+ Hour Immersive Program</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aut perspiciatis, ab laborum, corporis recusandae facilis vel placeat ipsa voluptatem nulla quos repellat perferendis, nihil ratione distinctio reprehenderit nesciunt esse!
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About