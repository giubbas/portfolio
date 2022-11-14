import React from 'react'
import homeImage from '../styles/assets/home-main.jpg'
import scroll from '../styles/assets/scroll-down.svg'
import Typical from 'react-typical'

const Home = () => {

  return (
    <section className='homepage'>
      <div className='homepage-container'>
        <div>
          <h1>Hello, <br /> I'm <Typical className="typing-animation" loop={Infinity} steps={['Riccardo Giubilo', 1000, 'a <developer />', 1000]} /></h1>
        </div>
        <img alt="typing" src={homeImage} />
      </div>
      <h5>scroll</h5>
      <img id="scroll" alt="scroll" src={scroll} />
    </section>
  )
}

export default Home