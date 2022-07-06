import React from 'react'

// Import images
import developer from '../styles/assets/developer.jpg'
import drummer from '../styles/assets/drummer.png'
import composer from '../styles/assets/composer.jpg'

const Experience = () => {

  return (
    <section id='experience'>
      <h1>Experience</h1>
        <div className='timeline-container'>

          <div className='timeline-item'>
            <div className='dot'></div>
            <label className='odd-label'>2021</label>
            <div className='timeline-card'>
              <div className='odd'>
                <h2>General Assembly</h2>
                <h3>Software Engineering Immersive</h3>
                <h4>03/2022 - 06/2022</h4>
                <p>
                  Completed over 420 hours of instruction in front-end, back-end and full stack technologies
                  including JavaScript, Python, CSS, HTML, and No/SQL and SQL databases.
                  Built both front-end and full stack applications, working both individually and in a
                  collaborative team.
                </p>
              </div>
              <img alt="project-img" src={developer} />
            </div>
          </div>

          <div className='timeline-item'>
            <div className='dot'></div>
            <label className='even-label'>2019</label>
            <div className='timeline-card'>
              <img alt="project-img" src={drummer} />
              <div>
                <h2>Music Teacher</h2>
                <h3>
                  Music Academy (Pisa, Italy)<br />
                  Agapao Institute (Montecatini, Italy)<br />
                  Effemstudio (Firenze, Italy)
                </h3>
                <h4>09/2019 - 12/2021</h4>
                <p>
                  <ul>
                    <li>Managing the studio’s drums department</li>
                    <li>Teaching students of all ages in 1-1 and class lessons</li>
                    <li>Defining the annual education programs according to the objectives of the students</li>
                    <li>Prepare end-of-year concerts by setting up rehearsals</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className='timeline-item'>
            <div className='dot'></div>
            <label className='odd-label'>2018</label>
            <div className='timeline-card'>
            <div className='odd'>
                <h2>Arranger, composer, producer</h2>
                <h3>Marystar Spettacoli</h3>
                <h4>09/2018 - 07/2019</h4>
                <p>
                  Dealing with the many processes necessary for the production of a song:
                  <ul>
                    <li>Composition of music and lyrics</li>
                    <li>Arrangement of the different instruments (drums, bass guitar, piano, guitar, strings, etc.)</li>
                    <li>Production on a digital audio workstation (Logic Pro software)</li>
                  </ul>
                </p>
              </div>
              <img alt="project-img" src={composer} />
            </div>
          </div>

          <div className='timeline-item'>
            <div className='dot'></div>
            <label className='even-label'>2017</label>
            <div className='timeline-card'>
            <img alt="project-img" src={drummer} />
            <div className='even'>
                <h2>Music Teacher</h2>
                <h3>Jam Academy, Garfagnana (Italy)</h3>
                <h4>11/2017 - 07/2019</h4>
                <p>
                  <ul>
                    <li>Managing the studio’s drums department</li>
                    <li>Teaching students of all ages in 1-1 and class lessons</li>
                    <li>Defining the annual education programs according to the objectives of the students</li>
                    <li>Prepare end-of-year concerts by setting up rehearsals</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

        </div>
    </section>
  )
}

export default Experience