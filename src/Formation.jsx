import vives from './assets/img/vives-1.png'
import iut from './assets/img/iut-1.jpg'
import acors from './assets/img/acors-illustration.jpg'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Formation() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true
  }

  const slides = [
    {
      src: vives,
      content: (
        <div>
          <h3 className="center-align">Erasmus</h3>
          <h4 className="center-align">2016-2017</h4>
          Séjour Erasmus+ en Belgique : perfectionnement à l&apos;Anglais technique et
          conversationnel.
          <br />
          Approfondissement de mes connaissances en développement web avec ASP.NET et Java EE et en
          développement mobile avec iOS (Swift) et Android (Java).
          <br />
          Travaux individuels avec évaluation du tuteur et un projet de fin de semestre en groupe.
        </div>
      )
    },

    {
      src: iut,
      content: (
        <div>
          <h3 className="center-align">DUT Informatique</h3>
          <h4 className="center-align">2014-2016</h4>
          <div className="description">
            <ul className="white-text">
              <li>Algorithmie et structures de données</li>
              <li>Programmation orientée objets (Java) et machine (C)</li>
              <li>Développement web avec PHP (backend) et JS (frontend)</li>
              <li>Création d&apos;interfaces homme-machine</li>
              <li>Bases de données relationnelles (Oracle et MySQL)</li>
              <li>Systèmes et réseaux Linux (Bash et lignes de commandes)</li>
              <li>Comptabilité et économie</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      src: acors,
      content: (
        <div className="carousel-content">
          <div className="headline">
            <h3 className="center-align">Niveau Licence ACORS</h3>
            <h4 className="center-align">2018-2019</h4>
          </div>
          <div className="description">
            <p className="white-text">
              Niveau de la Licence professionnelle Animation des Communautés et Réseaux
              Socio-numériques. Formation focalisée sur la communication numérique,
              l&apos;infographie (Illustrator), le développement de sites vitrines avec PHP et
              Wordpress, le SEO et la rédaction pour le web.
            </p>
          </div>
        </div>
      )
    }
  ]

  return (
    <section id="formation" className="section grey darken-4">
      <div className="carousel-container">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="carousel-slide">
              <img src={slide.src} alt={`Slide ${index + 1}`} />
              <div className="carousel-text">{slide.content}</div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Formation
