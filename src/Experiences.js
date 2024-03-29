import mercedes from './assets/img/mercedes.jpg'
import carteBancaire from './assets/img/carte-bancaire.jpg'
import kp1 from './assets/img/kp1-4.jpg'
import switchIT from './assets/img/switch-1.jpg'
import booku from './assets/img/booku-2.jpg'
import stageDUT from './assets/img/stage-dut.jpg'
import xray from './assets/img/x-ray.jpg'
import React from 'react'

function Experiences() {
  return (
    <section id="section-experiences" className="section white darken-4">
      <div className="row">
        <div className="col l12 m12 s12">
          <div className="card large white darken-4 z-depth-2">
            <img className="img-background-exp" src={xray} alt="scanner irm" loading="lazy" />
            <div className="card-content">
              <div className="headline">
                <h3 className="center-align card-title">ALARA Group</h3>
                <h4 className="center-align card-location">Entzheim</h4>
                <h5 className="center-align card-employment-period">Novembre 2022 - Aujourd'hui</h5>
              </div>

              <div className="divider"></div>

              <p className="job-description">
                La société <a href="https://alara-group.fr/">ALARA Group</a> conçoit des solutions
                dans la radio-protection. Comme la mesure du niveau d'exposition aux rayonnements
                ionisants et non ionisants pour le secteur médical, vétérinaire, dentaire et
                industrielx. Le siège est présent à Entzheim mais la société emploie des
                collaborateurs sur toute la France pour la maintenance, l'installation et la
                prospection de ses produits et services.
              </p>
              <p className="job-description">
                En tant que développeur Java, je travaille sur les solutions web comme l'ERP et le
                site externe pour les clients : aussi bien en backend avec JPA/Hibernate et MySQL
                que côté front-end avec GWT et Domino-ui.
              </p>
            </div>
          </div>
        </div>
        <div className="col l4 m6 s12">
          <div className="card large white darken-4 z-depth-2">
            <img
              className="img-background-exp"
              src={mercedes}
              alt="Voiture Mercedes rouge"
              loading="lazy"
            />
            <div className="card-content">
              <div className="headline">
                <h3 className="center-align card-title">La Fabrik à ID</h3>
                <h4 className="center-align card-location">Bischheim</h4>
                <h5 className="center-align card-employment-period">Janvier 2022</h5>
              </div>

              <div className="divider"></div>
              <p className="job-description">
                La start-up <strong>La Fabrik à ID</strong> travaillait avec les concessionnaires
                automobile notamment Mercedes pour la digitalisation du parcours client avec des
                scanners de plaques et un CRM intégré.
              </p>
              <p className="job-description">
                Mon passage m'a permis de cerner les enjeux techniques et fonctionnels des solutions
                proposées et j'ai pu participer à la mise en place du nouveau CRM en intégrant les
                composants de création de compte de vendeurs, la gestion des utilisateurs ou encore
                la création et la gestion d'équipes.
              </p>
            </div>
          </div>
        </div>
        <div className="col l4 m6 s12">
          <div className="card large white darken-4 z-depth-2">
            <img
              className="img-background-exp"
              src={carteBancaire}
              alt="Carte bancaire"
              loading="lazy"
            />
            <div className="card-content">
              <div className="headline">
                <h3 className="center-align card-title">
                  SII Est Strasbourg / Euro-Information Développement
                </h3>
                <h4 className="center-align card-location">Strasbourg</h4>
                <h5 className="center-align card-employment-period">
                  CDI de juillet 2021 à novembre 2021
                </h5>
              </div>

              <div className="divider"></div>
              <p className="job-description">
                Euro-Information Développement est la filiale technologique du groupe Crédit
                Mutuel-CIC.
              </p>
              <p className="job-description">
                J'ai rejoint la partie monétique - recouvrement commerçant afin d'améliorer et de
                maintenir les applications intranet en C# / ASP.NET (framework Devbooster) dont des
                solutions pour l'historisation des cartes et des transactions et le suspens /
                annulation des remises.
              </p>
            </div>
          </div>
        </div>
        <div className="col l4 m6 s12">
          <div className="card large white darken-4 z-depth-2">
            <img
              className="img-background-exp"
              src={kp1}
              alt="Chantier avec des grues"
              loading="lazy"
            />
            <div className="card-content">
              <div className="headline">
                <h3 className="center-align card-title">2S2I Solutions / KP1</h3>
                <h4 className="center-align card-location">Chaumont</h4>
                <h5 className="center-align card-employment-period">
                  CDI de janvier 2020 à mars 2021
                </h5>
              </div>

              <div className="divider"></div>
              <p className="job-description">
                KP1 est une société incontournable du bâtiment en France. Elle est spécialisée dans
                le béton pré-contrainte et conçoit ses propres logiciels de CAO en 2D/3D pour
                élaborer des produits en BIM.
              </p>
              <p className="job-description">
                Chargé de reprendre le développement d'un outils de dessin essentiel pour les
                bureaux d'études, je monte en compétences et je propose des solutions afin de
                l'améliorer.
              </p>
            </div>
          </div>
        </div>

        <div className="col l4 m6 s12">
          <div className="card large white darken-4 z-depth-2">
            <img
              className="img-background-exp"
              src={switchIT}
              alt="Article avec des statistiques financières"
              loading="lazy"
            />
            <div className="card-content">
              <div className="headline">
                <h3 className="center-align card-title">Switch IT</h3>
                <h4 className="center-align card-location">Leudelange, Luxembourg</h4>
                <h5 className="center-align card-employment-period">CDI en 2017</h5>
              </div>

              <div className="divider"></div>
              <p className="job-description">
                Switch IT est un éditeur de logiciel luxembourgeois dédié au développement de
                solutions informatiques pour les sociétés d'assurance vie.
              </p>
              <p className="job-description">
                En tant que salarié en période d'essai, j'ai travaillé sur l'ajout de fontionnalités
                dans une application web en ASP.NET Forms et une application mobile Xamarin (iOS et
                Android).
              </p>
            </div>
          </div>
        </div>

        <div className="col l4 m6 s12">
          <div className="card large white darken-4 z-depth-2">
            <img
              className="img-background-exp"
              src={booku}
              alt="Evénement de type salon professionnel avec des stands"
              loading="lazy"
            />
            <div className="card-content">
              <div className="headline">
                <h3 className="center-align card-title">Book'u</h3>
                <h4 className="center-align card-location">Kortrijk, Belgique</h4>
                <h5 className="center-align card-employment-period">Stage en 2017</h5>
              </div>
              <div className="divider"></div>
              <p className="job-description">
                La start-up Book'u conçoit des applications clés en main pour la gestion
                d'événements tels que des salons/expositions. L'outils principal permet de finement
                gérer les aspects humains, financiers et temporels qu'implique ce type de projet.
              </p>
              <p className="job-description">
                Ce dernier créé avec une architecture spécifiquement orienté vers les ordinateurs de
                bureau avait besoin d'une version plus légère et adapté aux mobiles. Avec d'autres
                étudiants de l'université VIVES à Courtai, j'ai eu l'opportunité de tester les
                technologies Ionic et AngularJS afin de proposer un prototype répondant à ce besoin.
              </p>
            </div>
          </div>
        </div>

        <div className="col l4 m6 s12">
          <div className="card large white darken-4 z-depth-2">
            <img
              className="img-background-exp"
              src={stageDUT}
              alt="Bouteilles en verre"
              loading="lazy"
            />
            <div className="card-content">
              <div className="headline">
                <h3 className="center-align card-title">O-I Manufacturing</h3>
                <h4 className="center-align card-location">Gironcourt-sur-Vraine</h4>
                <h5 className="center-align card-employment-period">Stage en 2016</h5>
              </div>
              <div className="divider"></div>
              <p className="job-description">
                O-I Manufacturing est une entreprise internationale spécialisée dans la fabrication
                d'objets en verre. La filiale de Gironcourt-Sur-Vraine est une verrerie du groupe
                qui recycle des bouteilles usagées en nouvelles qui sont destinées aux spiritueux.
              </p>
              <p className="job-description">
                Recruté en tant que stagiaire j'ai conçu une application ASP.NET qui récupère les
                documents présents sur le serveur, les organise dans une base de données puis
                affiche un site en intranet où chaque employé connecté peut rechercher, trier ou
                filtrer par des catégories les documents qu'il souhaite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiences
