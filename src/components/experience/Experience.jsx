import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container exxperience_container'>
        {/* FRONTEND */}
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <h4>Axios</h4>
              <small className='text-light'>Intermediate</small>
            </article>
          </div>
        </div>
        {/* BACKEND */}
        <div className='experience_backend'>
          <h3>Backend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <h4>Node.js</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <h4>SQL</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <h4>Mongoose</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <h4>Express</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience