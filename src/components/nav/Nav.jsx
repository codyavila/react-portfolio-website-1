import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {RiChatSmile3Line} from 'react-icons/ri'
import {VscPerson} from 'react-icons/vsc'
import {VscCode} from 'react-icons/vsc'
import {AiOutlineAppstore} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activNav === '#about' ? 'active' : ''}><VscPerson /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activNav === '#experience' ? 'active' : ''}><VscCode /></a>
      <a href='#projects' onClick={() => setActiveNav('#projects')} className={activNav === '#projects' ? 'active' : ''}><AiOutlineAppstore /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activNav === '#contact' ? 'active' : ''}><RiChatSmile3Line /></a>
    </nav>
  )
}

export default Nav