import React from 'react'

import profile from '../styles/assets/profile.jpg'

import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Contacts = () => {

  return (
    <section id='contact'>
      <h1>Contact</h1>
      <div>
        <img src={profile} alt="profile" />
        <div>
          <ul>
            <li><AiOutlineMail />Email</li>
            <li><a href='https://github.com/giubbas' target="_blank" rel="noreferrer"><AiFillGithub />GitHub</a></li>
            <li><a href='https://www.linkedin.com/in/riccardo-giubilo/' target="_blank" rel="noreferrer"><AiFillLinkedin />LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contacts