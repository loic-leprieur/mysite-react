import vives from './assets/img/vives-1.png'
import iut from './assets/img/iut-1.jpg'
import acors from './assets/img/acors-illustration.jpg'
import React from 'react'

function Formation() {
  return (
    <section id="formation" className="section grey darken-4">
      <div className="carousel carousel-slider center">
        <div id="carousel-item-dueti" className="carousel-item">
          <img src={vives} alt="Globe terrestre" className="carousel-background" loading="lazy" />
          <div className="carousel-content">
            <div className="headline">
              <h3 className="center-align">DUETI (Erasmus)</h3>
              <h4 className="center-align">2016-2017</h4>
            </div>
            <div className="description">
              <p className="white-text">
                Séjour Erasmus+ en Belgique : perfectionnement à l'Anglais technique et
                conversationnel.
                <br />
                Approfondissement de mes connaissances en développement web avec ASP.NET et Java EE
                et en développement mobile avec iOS (Swift) et Android (Java).
                <br />
                Travaux individuels avec évaluation du tuteur et un projet de fin de semestre en
                groupe.
              </p>
            </div>
          </div>
        </div>
        <div id="carousel-item-dut" className="carousel-item">
          <img src={iut} alt="Lignes de code" className="carousel-background" loading="lazy" />
          <div className="carousel-content">
            <div className="headline">
              <h3 className="center-align">DUT Informatique</h3>
              <h4 className="center-align">2014-2016</h4>
            </div>
            <div className="description">
              <ul className="white-text">
                <li>Algorithmie et structures de données</li>
                <li>Programmation orientée objets (Java) et machine (C)</li>
                <li>Développement web avec PHP (backend) et JS (frontend)</li>
                <li>Création d'interfaces homme-machine</li>
                <li>Bases de données relationnelles (Oracle et MySQL)</li>
                <li>Systèmes et réseaux Linux (Bash et lignes de commandes)</li>
                <li>Comptabilité et économie</li>
              </ul>
            </div>
          </div>
        </div>
        <div id="carousel-item-acors" className="carousel-item">
          <img
            src={acors}
            alt="Texte coloré de 'Social Media'"
            className="carousel-background"
            loading="lazy"
          />
          <div className="carousel-content">
            <div className="headline">
              <h3 className="center-align">Niveau Licence ACORS</h3>
              <h4 className="center-align">2018-2019</h4>
            </div>
            <div className="description">
              <p className="white-text">
                Niveau de la Licence professionnelle Animation des Communautés et Réseaux
                Socio-numériques. Formation focalisée sur la communication numérique, l'infographie
                (Illustrator), le développement de sites vitrines avec PHP et Wordpress, le SEO et
                la rédaction pour le web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Formation
