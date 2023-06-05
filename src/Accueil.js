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
      <div className="parallax-container row valign-wrapper">
        <div className="container-profile container center-align valign-wrapper">
          <div className="row invisible" id="banner-profile">
            <div className="col s12 m12 l4 center-align">
              <img id="profile-img" src={profil} alt="Portrait de Loïc"></img>
            </div>
            <div
              id="profile-body"
              className="col s12 m12 l8 center-align white-text lignten-3-text">
              <h1 id="title-job">Loïc {nbYearsSinceBirthday()} ans, Analyste&nbsp;développeur</h1>
              <h2 className="s12 text-justify" id="profile-text">
                Passionné par les nouvelles technologies et leurs apports au quotidien de chacun(e).
              </h2>
              <div id="mail-button" className="s12 waves-effect btn-large hoverable amber darken-4">
                <a
                  href="mailto:contact@loic-leprieur.fr?subject=Site web (Accueil)"
                  className="white-text valign-wrapper">
                  <i className="medium material-icons">mail_outline</i>&nbsp;
                  <span className="center-align">Email</span>
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
