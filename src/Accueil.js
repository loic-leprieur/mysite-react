import profil from './assets/img/profil.jpg'
import programming from './assets/img/programing-photo-1.jpg'
import React from 'react'

function Accueil() {
  // eslint-disable-next-line no-unused-vars
  function nbYearsSinceBirthday() {
    const pastDate = '1996-05-17'
    const period = new Date(new Date().getTime() - new Date(pastDate).getTime())
    return period.getFullYear() - 1970 // at 1970 the date calendar starts
  }

  return (
    <section id="accueil" className="section">
      <div className="parallax-container">
        <div className="container-profile">
          <div className="invisible" id="banner-profile">
            <div className="profile-img-container">
              <img id="profile-img" src={profil} alt="Portrait de Loïc"></img>
            </div>
            <div id="profile-body" className="white-text lignten-3-text">
              <h1 id="title-job">Loïc {nbYearsSinceBirthday()} ans, Analyste&nbsp;développeur</h1>
              <h2 className="text-justify" id="profile-text">
                Passionné par les nouvelles technologies et leurs apports au quotidien de chacun(e).
              </h2>
              <div
                id="mail-button"
                className="waves-effect btn-large hoverable pulse amber darken-4">
                <a
                  href="mailto:contact@loic-leprieur.fr?subject=Site web (Accueil)"
                  className="white-text link-mailto">
                  <i className="mailto-icon large material-icons">mail_outline</i>&nbsp;
                  <span id="email-text">contact@loic-leprieur.fr</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="parallax">
          <img id="parallax-img1" src={programming} alt="Clavier RGB" />
        </div>
      </div>
    </section>
  )
}

export default Accueil
