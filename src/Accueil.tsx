import { useEffect, useRef, useState } from 'react';
import profil from './assets/img/profil.jpg';
import programming from './assets/img/programing-photo-1.jpg';
import LanguageSkill from './LanguageSkill';
import Experiences from './Experiences';
import Infos from './Infos';
import Contact from './Contact';
import Formation from './Formation';
import Portfolio from './Portfolio';
import React from 'react';

function Accueil() {
  function nbYearsSinceBirthday() {
    const pastDate = new Date('1996-05-17');
    const currentYear = new Date().getFullYear();
    return currentYear - pastDate.getFullYear();
  }

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const bannerProfile = document.getElementById('banner-profile');
    const navbar = document.getElementById('navbar');

    // Function to handle fade-in effect
    function show() {
      if (bannerProfile) {
        setOpacity((prevOpacity) => {
          if (prevOpacity < 1) {
            return prevOpacity + 0.1;
          } else {
            return prevOpacity;
          }
        });
      } else {
        console.warn('Element #banner-profile not found');
      }
    }

    function fadeIn() {
      setInterval(show, 200);
    }

    fadeIn();

    function addStickyToNav() {
      if (navbar) {
        const stickyOffsetTop = navbar.offsetTop;
        if (window.scrollY >= stickyOffsetTop) {
          navbar.classList.add('sticky');
        } else {
          navbar.classList.remove('sticky');
        }
      } else {
        console.warn('Element #navbar not found');
      }
    }

    window.addEventListener('scroll', addStickyToNav);

    return () => {
      window.removeEventListener('scroll', addStickyToNav);
    };
  }, []);

  function smoothScrollToSection(
    linkSelector: string,
    targetSelector: string,
    headerHeight: number
  ) {
    document.querySelector(linkSelector)?.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(targetSelector);
      if (target) {
        const targetPosition = target.getBoundingClientRect().top;
        const offset = targetPosition - headerHeight;
        window.scrollBy({
          top: offset,
          behavior: 'smooth',
        });
      } else {
        console.warn(`Element ${targetSelector} not found`);
      }
    });
  }

  useEffect(() => {
    smoothScrollToSection('.brand-logo', '#top', 80);
    smoothScrollToSection('#link-formation', '#formation', 65);
    smoothScrollToSection('#link-portfolio', '#portfolio', 200);
    smoothScrollToSection('#link-infos', '#infos', 80);
    smoothScrollToSection('#link-contact', '#contact', 80);
  }, []);

  return (
    <div id="main">
      <section id="accueil" className="section">
        <div className="parallax-container">
          <div className="container-profile">
            <div className="invisible" id="banner-profile" style={{ opacity: opacity }}>
              <div className="profile-img-container">
                <img id="profile-img" src={profil} alt="Portrait de Loïc" loading="lazy"></img>
              </div>
              <div id="profile-body" className="white-text lignten-3-text">
                <h1 id="title-job">Loïc {nbYearsSinceBirthday()} ans, Analyste&nbsp;développeur</h1>
                <h2 className="text-justify" id="profile-text">
                  Passionné par les nouvelles technologies et leurs apports au quotidien de
                  chacun(e).
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
      <Contact />
    </div>
  );
}

export default Accueil;
