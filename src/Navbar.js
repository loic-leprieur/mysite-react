import React from 'react'

function Navbar() {
  return (
    <nav id="navbar">
      <div className="nav-wrapper white darken-4">
        <span className="nav-title-align">
          <a href="/" className="brand-logo">
            {' '}
            <span className="logo">L</span>
            <span className="logo-text">oïc LEPRIEUR</span>
          </a>
          <a href="/" data-target="mobile-demo" className="sidenav-trigger">
            {' '}
            <i className="material-icons">menu</i>
          </a>
        </span>
        <ul className="right hide-on-med-and-down">
          <li>
            <a id="link-home" href="#accueil">
              Accueil
            </a>
          </li>
          <li>
            <a href="../blog">Blog</a>
          </li>
          <li>
            <a id="link-formation" href="#formation">
              Formation
            </a>
          </li>
          <li>
            <a id="link-portfolio" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a id="link-infos" href="#infos">
              Infos
            </a>
          </li>
          <li>
            <a id="link-contact" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <ul className="sidenav white darken-4" id="mobile-demo">
        <li>
          <a href="#accueil">
            <i className="medium material-icons">home</i>Accueil
          </a>
        </li>
        <li>
          <a href="../blog">
            <i className="medium material-icons">speaker_notes</i>Blog
          </a>
        </li>
        <li>
          <a href="#formation">
            <i className="medium material-icons">school</i>Formation
          </a>
        </li>
        <li>
          <a href="#portfolio">
            <i className="medium material-icons">business_center</i>Portfolio
          </a>
        </li>
        <li>
          <a href="#infos">
            <i className="medium material-icons">info</i>Infos
          </a>
        </li>
        <li>
          <a href="#contact">
            <i className="medium material-icons">contact_mail</i>Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
