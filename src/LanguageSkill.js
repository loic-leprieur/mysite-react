import atomium from './assets/img/brugges-erasmus.jpg'
import React from 'react'

function LanguageSkill() {
  return (
    <div className="parallax-container">
      <div className="container-profile container">
        <h3>
          Understanding and practicing English is a key factor in a challenging and ever changing
          modern world.
        </h3>
        <p>
          My Erasmus stay helped me to bring my language level to another dimension. 🇪🇺 I spoke
          everyday in the mothertongue of Grace Hopper and Alan Turing while working with teacher
          and foreign students from all over Europe and further.
        </p>{' '}
        <p>
          It helped me grasping the remaining English's subtilities and using it for in reality.
          Such experience is unmatched in someone's life and so it was for me as well.
        </p>
        <p>It blew my mind and changed forever my vision on the world.</p>
      </div>
      <div className="parallax">
        <img src={atomium} alt="Atomium de Bruxelles" />
      </div>
    </div>
  )
}

export default LanguageSkill
