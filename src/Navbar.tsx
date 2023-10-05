import React from 'react';
import logo from './assets/img/logo.png';

function Navbar() {
  return (
    <nav id="navbar">
      <div className="nav-wrapper white darken-4">
        <span className="nav-title-align">
          <a href="/" className="brand-logo">
            {' '}
            <img id="logo" src={logo} alt="Lettre L cursive" loading="lazy" />
            <span className="logo-text">oïc LEPRIEUR</span>
          </a>
          <a href="/" data-target="mobile-demo" className="sidenav-trigger">
            {' '}
            <i className="material-icons">menu</i>
          </a>
        </span>
        <ul className="right hide-on-med-and-down">
          <li>
            <a id="link-home" href="/">
              Accueil
            </a>
          </li>
          <li>
            <a id="link-blog" href="https://blog.loic-leprieur.fr">
              Blog
            </a>
          </li>
          <li>
            <a
              id="link-formation"
              href="/"
              onClick={function (e) {
                e.preventDefault();
              }}>
              Formation
            </a>
          </li>
          <li>
            <a
              id="link-portfolio"
              href="/"
              onClick={function (e) {
                e.preventDefault();
              }}>
              Portfolio
            </a>
          </li>
          <li>
            <a
              id="link-infos"
              href="/"
              onClick={function (e) {
                e.preventDefault();
              }}>
              Infos
            </a>
          </li>
          <li>
            <a
              id="link-contact"
              href="/"
              onClick={function (e) {
                e.preventDefault();
              }}>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <ul className="sidenav white darken-4" id="mobile-demo">
        <li>
          <a href="/">
            <i className="medium material-icons">home</i>Accueil
          </a>
        </li>
        <li>
          <a href="https://blog.loic-leprieur.fr">
            <i className="medium material-icons">speaker_notes</i>Blog
          </a>
        </li>
        <li>
          <a
            href="/"
            onClick={function (e) {
              e.preventDefault();
            }}>
            <i className="medium material-icons">school</i>Formation
          </a>
        </li>
        <li>
          <a
            href="/"
            onClick={function (e) {
              e.preventDefault();
            }}>
            <i className="medium material-icons">business_center</i>Portfolio
          </a>
        </li>
        <li>
          <a
            href="/"
            onClick={function (e) {
              e.preventDefault();
            }}>
            <i className="medium material-icons">info</i>Infos
          </a>
        </li>
        <li>
          <a
            href="/"
            onClick={function (e) {
              e.preventDefault();
            }}>
            <i className="medium material-icons">contact_mail</i>Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
