import atomium from './assets/img/brugges-erasmus.jpg'
import React from 'react'

function LanguageSkill() {
  return (
    <div className="parallax-container">
      <div className="container-profile container center-align valign-wrapper">
        <h3>
          Understanding and practicing English is a key factor in any modern profesional context.
          <br />
          <br />
          My Erasmus stay helped me to bring my language level to another dimension.
        </h3>
      </div>
      <div className="parallax">
        <img src={atomium} alt="Atomium de Bruxelles" />
      </div>
    </div>
  )
}

export default LanguageSkill
