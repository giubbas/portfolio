import React from 'react'

// Import images
import gemTheCloud from '../styles/assets/gem-the-cloud.png'
import animals from '../styles/assets/animals-2.png'
import books from '../styles/assets/books.png'
import mealingList from '../styles/assets/mealing-list.png'

// Import icons
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoCss3, IoLogoJavascript, IoLogoSass, IoLogoNodejs, IoLogoPython, IoLogoGithub } from 'react-icons/io'
import { SiReact, SiMongodb, SiDjango, SiPostgresql, SiBootstrap } from 'react-icons/si'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'

const Projects = () => {

  return (
    <section id='projects'>
      <h1>Projects</h1>
      <div>
        <img alt="project-img" src={mealingList} />
        <div className='project-body odd'>
          <h2>Mealing List</h2>
          <h3>1 week | Solo</h3>
          <div>
            <SiReact />
            <IoLogoJavascript />
            <SiDjango />
            <IoLogoPython />
            <IoLogoSass />
            <SiPostgresql />
          </div>
          <p>
            Full-stack application which was rooted in Python, Django and PostgreSQL back-end.
            I created a website about food where you can be inspired by other people’s recipes and comment on them. You can also post your meal, update it and delete it.
          </p>
          <div>
            {/* <a href="/" target="_blank" rel="noreferrer">
              <FaExternalLinkSquareAlt />
            </a> */}
            <a href="https://github.com/giubbas/GA-Project-4" target="_blank" rel="noreferrer">
              <IoLogoGithub />
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className='project-body even'>
          <h2>Gem the cloud</h2>
          <h3>1 week | Solo</h3>
          <div>
            <AiFillHtml5 />
            <IoLogoCss3 />
            <IoLogoJavascript />
          </div>
          <p>
            I had one week to build a grid-based game in JavaScript, HTML and CSS. I created a
            personalized version of the famous arcade game Space Invaders. I cemented my JS 
            fundamental skills and I became more familiar with styling. I also drew some of the game characters myself, using a pixel-art style using Photoshop CS and an online editor on Pixilart.com.
          </p>
          <div>
            <a href="https://giubbas.github.io/GA-Project-1/" target="_blank" rel="noreferrer">
              <FaExternalLinkSquareAlt />
            </a>
            <a href="https://github.com/giubbas/GA-Project-1" target="_blank" rel="noreferrer">
              <IoLogoGithub />
            </a>
          </div>
        </div>
        <img alt="project-img" src={gemTheCloud} />
      </div>
      <div>
        <img alt="project-img" src={animals} />
        <div className='project-body odd'>
          <h2>A Day at the Zoo</h2>
          <h3>48 hours | Pair Programming</h3>
          <div>
            <SiReact />
            <IoLogoJavascript />
            <IoLogoCss3 />
            <SiBootstrap />
          </div>
          <p>
            In two days, we built a React app which used an external API. The project was invaluable in terms of learning to pair-code and being able to share our different strengths and skills.
          </p>
          <div>
            <a href="https://zoojourney.netlify.app/" target="_blank" rel="noreferrer">
              <FaExternalLinkSquareAlt />
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <IoLogoGithub />
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className='project-body even'>
          <h2>Book Store</h2>
          <h3>1 week | Group Project</h3>
          <div>
            <SiReact />
            <IoLogoJavascript />
            <SiMongodb />
            <IoLogoNodejs />
            <IoLogoSass />
            <SiPostgresql />
          </div>
          <p>
            Full-Stack MERN app with CRUD functionality. As a group, we created a book app in 
            which the user can register and interact by posting reviews or adding books to the 
            wishlist. I particularly focussed on building the reviews’ posting and deleting functionalities and the home page.
          </p>
          <div>
            <a href="https://ga-project-books.herokuapp.com/" target="_blank" rel="noreferrer">
              <FaExternalLinkSquareAlt />
            </a>
            <a href="https://github.com/giubbas/GA-Project-3" target="_blank" rel="noreferrer">
              <IoLogoGithub />
            </a>
          </div>
        </div>
        <img alt="project-img" src={books} />
      </div>
    </section>
  )
}

export default Projects