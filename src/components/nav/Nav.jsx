import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {RiChatSmile3Line} from 'react-icons/ri'
import {VscPerson} from 'react-icons/vsc'
import {VscCode} from 'react-icons/vsc'
import {AiOutlineAppstore} from 'react-icons/ai'

const Nav = () => {
  return (
    <nav>
      <a href='#'><AiOutlineHome /></a>
      <a href='#about'><VscPerson /></a>
      <a href='#experience'><VscCode /></a>
      <a href='#projects'><AiOutlineAppstore /></a>
      <a href='#contact'><RiChatSmile3Line /></a>
    </nav>
  )
}

export default Nav