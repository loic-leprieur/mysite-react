import shopNcook from './assets/img/screenshot_appli_ShopNCook.jpg';
import demoCrazyBox from './assets/video/demo-crazybox.mp4';
import crazyBox from './assets/img/crazybox.png';
import xamarinApp from './assets/img/tchat-img.jpg';
import todoList from './assets/img/screenshot _app_TodoList.jpg';
import aventureTextuelle from './assets/img/screenshot_aventure_textuelle.jpg';
import bookuApp from './assets/img/booku-appli-screenshot.gif';
import oiBaseDoc from './assets/img/basedocumentaireOI.png';
import React from 'react';
import type { Fancybox as FancyboxType } from '@fancyapps/ui/types';
import * as Fancyapps from '@fancyapps/ui';
const Fancybox: typeof FancyboxType = Fancyapps.Fancybox;

function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <h3>Portfolio</h3>
      <div className="portfolio-cards-container">
        <div className="card-portfolio">
          <h4 className="card-title">Application Shop&amp;Cook</h4>
          <div className="card-image">
            <img
              data-fancybox
              src={shopNcook}
              alt="Appli de recherche de recettes"
              loading="lazy"
            />
          </div>
          <div className="card-action">
            <a href="https://github.com/loic-leprieur/shop-and-cook">Dépôt GitHub</a>
            <p>
              Application Android de recherche de recette via une API et d&apos;enregistrements
              d&apos;ingrédients
            </p>
          </div>
        </div>

        <div className="card-portfolio">
          <h4 className="card-title">CrazyBox</h4>
          <div className="card-image">
            <img data-fancybox src={crazyBox} alt="Page d'accueil de CrazyBox" loading="lazy" />
          </div>
          <div className="card-action">
            <a href="https://github.com/loic-leprieur/CrazyBox">Dépôt GitHub</a>
            <p>
              Site web en PHP et jQuery pour la création de pochettes cadeaux. Réalisé lors du
              hackaton &apos;Crazy Charly Day&apos; de l&apos;IUT Charlemagne
            </p>
            <video
              data-fancybox
              src={demoCrazyBox}
              controls
              loop
              autoPlay
              preload="auto"
              width="250px">
              <source src={demoCrazyBox} type="video/mp4" />
              Sorry, your browser doesn&apos;t support embedded videos.
            </video>
          </div>
        </div>

        <div className="card-portfolio">
          <h4 className="card-title">Application Xamarin de tchat</h4>
          <div className="card-image">
            <img
              data-fancybox
              src={xamarinApp}
              alt="Module de tchat dans une appli Xamarin"
              loading="lazy"
            />
          </div>
          <div className="card-action">
            <p>
              Composant UI/UX dans une bibliothèque PCL (avec d&apos;autres modules génériques) pour
              créer un environnement de tchat (ex: Messenger)
            </p>
          </div>
        </div>

        <div className="card-portfolio">
          <h4 className="card-title">Application Todo list Android</h4>
          <div className="card-image">
            <img
              data-fancybox
              src={todoList}
              alt="Liste de tâches à faire dans une app Android"
              loading="lazy"
            />
          </div>
          <div className="card-action">
            <a href="https://github.com/loic-leprieur/TodoList">Dépôt GitHub</a>
            <p>
              Application utilisant une base de données locale pour stocker des tâches à accomplir
              dans une liste modifiable. Implémentation de CRUD et de contrôles UI sur les
              smartphones Android.
            </p>
          </div>
        </div>

        <div className="card-portfolio">
          <h4 className="card-title">Jeu d&apos;aventures textuelles</h4>
          <div className="card-image">
            <img
              data-fancybox
              src={aventureTextuelle}
              alt="Niveau de base avec une porte, une clé et un mobilier"
              loading="lazy"
            />
          </div>
          <div className="card-action">
            <a href="https://github.com/loic-leprieur/jeu-aventure-textuel">Dépôt GitHub</a>
            <p>
              Jeu d&apos;aventures textuelles réalisé avec un analyseur synthaxique et un éditeur de
              niveaux. Le principe repose sur les jeux des années 80&apos;s où l&apos;on saisissait
              du texte pour exécuter des actions et dont la problématique reposait sur les commandes
              comprises par l&apos;ordinateur et l&apos;enchaînement des puzzles avec les objets et
              les éléments du décor. Application réalisée avec Java FX en version 8.
            </p>
          </div>
        </div>

        <div className="card-portfolio">
          <h4 className="card-title">Gestionnaire d&apos;évenements à Book&apos;U</h4>
          <div className="card-image">
            <img
              data-fancybox
              src={bookuApp}
              alt="Page listant les périodes de disponibilité"
              loading="lazy"
            />
          </div>
          <div className="card-action">
            <p>
              Application web Angular pour gérer des événements comme des salons. Réalisé avec la
              méthodologie SCRUM au sein d&apos;une équipe de 3 autres étudiants flammands à
              Courtrai (Belgique) pour la start-up <strong>Book&apos;u</strong> afin de tester la
              technologie. (Une application mobile avec Ionic avait aussi été réalisé en parallèle)
            </p>
          </div>
        </div>

        <div className="card-portfolio">
          <h4 className="card-title">Intranet ASP.NET</h4>
          <div className="card-image">
            <img
              data-fancybox
              src={oiBaseDoc}
              alt="Intranet de OI pour gérer la base documentaire"
              loading="lazy"
            />
          </div>
          <div className="card-action">
            <a href="https://github.com/loic-leprieur/OI-BaseDocumentaire">Dépot GitHub</a>
            <p>
              Pour remplacer une application sous Microsoft Access difficile à maintenir. Lors
              d&apos;un stage à O-I Manufacturing (verrerie à Gironcourt-sur-Vraine) j&apos;ai
              réalisé un site web sur l&apos;intranet de l&apos;entreprise en ASP.NET MVC 5 gérant
              la base documentaire. Il était possible de récupérer les documents du serveur Windows
              et les afficher sur le site dans un tableau triable, filtrable et avec une barre de
              recherche, la base de données sous SQL Server a permis de catégoriser les documents à
              partir de leur nom.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
