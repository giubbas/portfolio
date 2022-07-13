import React from 'react'

import sport from '../styles/assets/sport.jpg'
import food from '../styles/assets/food.jpg'
import concert from '../styles/assets/concert.jpg'

const Interests = () => {

  return (
    <section id='interests'>
      <h1>Interests</h1>
      <p>
        I always loved sports and music. As a boy, I played basketball in a team and I played the drums in a band. I always studied music and I did many concerts in professional environments. 
        I still love sports and I go to the gym every week. I also like to take care of my nutrition by cooking some healthy meals when I’m at home. 
      </p>
      <img src={sport} alt="sport" />
      <img src={food} alt="sport" />
      <img src={concert} alt="sport" />
    </section>
  )
}

export default Interests