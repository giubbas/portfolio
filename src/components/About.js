import React from 'react'

// Import icons
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoCss3, IoLogoJavascript, IoLogoSass, IoLogoNodejs, IoLogoPython, IoLogoNpm, IoLogoGithub } from 'react-icons/io'
import { SiReact, SiExpress, SiMongodb, SiDjango, SiPostgresql, SiInsomnia, SiYarn, SiBootstrap, SiAdobephotoshop } from 'react-icons/si'
import { ImGit } from 'react-icons/im'

const About = () => {

  return (
    <section id ='about'>
      <h1>About</h1>
      <p>
        I am a graduate of General Assembly's Software Engineering Immersive program.
        My interest in the tech industry began with an HTML/CSS introductory course which I absolutely loved.<br />
        This led to some further study in JavaScript fundamentals and subsequently I decided to take the software engineering course because I wanted to learn more and I was eager to work in the tech industry.<br />
        In my previous role I was a music teacher and producer, an industry that I believe is very similar because music is also a language to be practiced every day. This career provided me with a strong background in self-study and time management skills.<br />
        Today I'm looking forward to putting all of my skills to work and entering an inspiring environment in which I can grow.
      </p>
      <div>
        <div>
          <AiFillHtml5 />
          <label>HTML</label>
        </div>
        <div>
          <IoLogoCss3 />
          <label>CSS</label>
        </div>
        <div>
          <IoLogoJavascript />
          <label>JavaScript</label>
        </div>
        <div>
          <SiReact />
          <label>React</label>
        </div>
        <div>
          <IoLogoSass />
          <label>Sass</label>
        </div>
        <div>
          <IoLogoNodejs />
          <label>Node.js</label>
        </div>
        <div>
          <IoLogoPython />
          <label>Python</label>
        </div>
        <div>
          <IoLogoNpm />
          <label>npm</label>
        </div>
        <div>
          <IoLogoGithub />
          <label>GitHub</label>
        </div>
        <div>
          <SiExpress />
          <label>Express.js</label>
        </div>
        <div>
          <SiMongodb />
          <label>MongoDB</label>
        </div>
        <div>
          <SiDjango />
          <label>Django</label>
        </div>
        <div>
          <SiPostgresql />
          <label>PostgreSQL</label>
        </div>
        <div>
          <SiInsomnia />
          <label>Insomnia</label>
        </div>
        <div>
          <SiYarn />
          <label>Yarn</label>
        </div>
        <div>
          <SiBootstrap />
          <label>Bootstrap</label>
        </div>
        <div>
          <SiAdobephotoshop />
          <label>Adobe Photoshop</label>
        </div>
        <div>
          <ImGit />
          <label>Git</label>
        </div>
      </div>
    </section>
  )
}

export default About