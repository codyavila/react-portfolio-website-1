import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaBloggerB} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/cody-software-engineer/' target='_blank' rel='noreferrer'><BsLinkedin /></a>
        <a href='https://github.com/sanderscody26' target='_blank' rel='noreferrer'><FaGithub /></a>
        <a href='https://blogger.com' target='_blank' rel='noreferrer'><FaBloggerB /></a>
    </div>
  )
}

export default HeaderSocials