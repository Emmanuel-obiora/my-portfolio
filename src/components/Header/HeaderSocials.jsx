import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'
import {BsDribbble} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a rel='noreferrer' href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
      <a rel='noreferrer' href="https://github.com" target="_blank"><ImGithub /></a>
      <a rel='noreferrer' href="https://dribbble.com" target="_blank"><BsDribbble /></a>
    </div>
  )
}

export default HeaderSocials
