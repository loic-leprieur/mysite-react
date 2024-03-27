import profil from './assets/img/profil.webp'
import programming from './assets/img/programing-photo-1.jpg'
import React from 'react'
import LanguageSkill from './LanguageSkill'
import Experiences from './Experiences'
import Infos from './Infos'
// import Contact from './Contact'
import Formation from './Formation'
import Portfolio from './Portfolio'

function Accueil() {
  // eslint-disable-next-line no-unused-vars
  function nbYearsSinceBirthday() {
    const pastDate = new Date('1996-05-17')
    const currentDate = new Date()
    let years = currentDate.getFullYear() - pastDate.getFullYear()

    if (
      currentDate.getMonth() < pastDate.getMonth() ||
      (currentDate.getMonth() === pastDate.getMonth() && currentDate.getDate() < pastDate.getDate())
    ) {
      years--
    }

    return years
  }

  return (
    <div id="main">
      <section id="accueil" className="section full_screen">
        <div className="parallax-container">
          <div className="container-profile">
            <div className="invisible" id="banner-profile">
              <div className="profile-img-container">
                <img id="profile-img" src={profil} alt="Portrait de Loïc" loading="lazy"></img>
              </div>
              <div id="profile-body" className="white-text lignten-3-text">
                <h1 id="title-job">
                  Loïc {nbYearsSinceBirthday()} ans, Développeur&nbsp;full-stack&nbsp;☕️
                </h1>
                <h2 className="text-justify" id="profile-text">
                  Je suis un développeur web full stack Java, passionné par les nouvelles
                  technologies enthousiate et faisant preuve de zèle (peut-être un peu trop)
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
            <img id="parallax-img1" src={programming} alt="Clavier RGB" loading="lazy" />
          </div>
        </div>
      </section>
      <Formation />
      <LanguageSkill />
      <Experiences />
      <Portfolio />
      <Infos />
      {/*<Contact />*/}
    </div>
  )
}

export default Accueil
