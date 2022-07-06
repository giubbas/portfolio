import React from 'react'
import homeImage from '../styles/assets/home-main.jpg'
import scroll from '../styles/assets/scroll-down.svg'

const Home = () => {

  return (
    <section className='homepage'>
      <div>
        <h1>Hello, <br /> I'm a <span>developer</span></h1>
        <img alt="typing" src={homeImage} />
      </div>
      <h5>scroll</h5>
      <img id="scroll" alt="scroll" src={scroll} />
    </section>
  )
}

export default Home