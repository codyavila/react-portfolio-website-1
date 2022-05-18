import React from 'react'
import './footer.css'
import { BsTwitter, BsInstagram, BsLinkedin, BsFillArrowUpCircleFill } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'><BsFillArrowUpCircleFill /></a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href='https://instagram.com' target='_blank' rel='noreferrer'><BsInstagram /></a>
        <a href='https://twitter.com' target='_blank' rel='noreferrer'><BsTwitter /></a>
        <a href='https://linkedin.com' target='_blank' rel='noreferrer'><BsLinkedin/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Cody Sanders. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer