import shopNcook from "./img/screenshot_appli_ShopNCook.jpg";
import demoCrazyBox from "./video/demo-crazybox.mp4";
import crazyBox from "./img/crazybox.png" 
import xamarinApp from "./img/tchat-img.jpg";
import todoList from "./img/screenshot _app_TodoList.jpg";
import aventureTextuelle from "./img/screenshot_aventure_textuelle.jpg";
import bookuApp from "./img/booku-appli-screenshot.gif";
import oiBaseDoc from "./img/basedocumentaireOI.png";
import React from "react";

function Portfolio(){
    return (
        <section id="portfolio" className="section">
            <div id="main" className="portfolio">
            <h3>Portfolio</h3>
            <div className="row">
                <div className="col s12 m6 l4">
                    <div className="card">
                        <div className="card-image">
                            <img data-fancybox src={shopNcook} alt="Appli de recherche de recettes"/>
                        </div>
                        <div className="card-action">
                            <h4 className="card-title">Application Shop&amp;Cook</h4>
                            <a href="https://github.com/loic-leprieur/shop-and-cook">Dépôt GitHub</a>
                            <p>Application Android de recherche de recette via une API et d'enregistrements d'ingrédients</p>
                        </div>
                    </div>
                </div>
      
                <div className="col s12 m6 l4">
                    <div className="card">
                        <div className="card-image">
                            <img data-fancybox src={crazyBox} alt="Page d'accueil de CrazyBox"/>
                        </div>
                        <div className="card-action">
                            <h4 className="card-title">CrazyBox</h4>
                            <a href="https://github.com/loic-leprieur/CrazyBox">Dépôt GitHub</a>
                            <p>Site web en PHP et jQuery pour la création de pochettes cadeaux. Réalisé lors du hackaton 'Crazy Charly Day' de l'IUT Charlemagne</p>
                            <video data-fancybox href={demoCrazyBox} controls loop autoPlay preload="auto" width="250px">
                                <source src={demoCrazyBox} type="video/mp4"/>
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                    </div>
                </div>
      
                <div className="col s12 m6 l4">
                    <div className="card">
                        <div className="card-image">
                            <img data-fancybox src={xamarinApp} alt="Module de tchat dans une appli Xamarin"/>
                        </div>
                        <div className="card-action">
                            <h4 className="card-title">Application Xamarin de tchat</h4>
                            <p>Composant UI/UX dans une bibliothèque PCL (avec d'autres modules génériques) pour créer un environnement de tchat (ex: Messenger)</p>
                        </div>
                    </div>
                </div>
      
      
                <div className="col s12 m6 l4">
                    <div className="card">
                        <div className="card-image">
                            <img data-fancybox src={todoList} alt="Liste de tâches à faire dans une app Android"/>
                        </div>
                        <div className="card-action">
                            <h4 className="card-title">Application Todo list Android</h4>
                            <a href="https://github.com/loic-leprieur/TodoList">Dépôt GitHub</a>
                            <p>Application utilisant une base de données locale pour stocker des tâches à accomplir dans une liste modifiable. Implémentation de CRUD et de contrôles UI sur les smartphones Android.</p>
                        </div>
                    </div>
                </div>
      
                <div className="col s12 m6 l4">
                    <div className="card">
                        <div className="card-image">
                            <img data-fancybox src={aventureTextuelle} alt="Niveau de base avec une porte, une clé et un mobilier"/>
                        </div>
                        <div className="card-action">
                            <h4 className="card-title">Jeu d'aventures textuelles</h4>
                            <a href="https://github.com/loic-leprieur/jeu-aventure-textuel">Dépôt GitHub</a>
                            <p>Jeu d'aventures textuelles réalisé avec un analyseur synthaxique et un éditeur de niveaux.
                                Le principe repose sur les jeux des années 80's où l'on saisissait du texte pour exécuter
                                des actions et dont la problématique reposait sur les commandes comprises par l'ordinateur et
                                l'enchaînement des puzzles avec les objets et les éléments du décor. Application réalisée avec
                                Java FX en version 8.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m6 l4">
                    <div className="card">
                        <div className="card-image">
                            <img data-fancybox src={bookuApp} alt="Page listant les périodes de disponibilité"/>
                        </div>
                        <div className="card-action">
                            <h4 className="card-title">Gestionnaire d'évenements à Book'U</h4>
                            <p>Application web Angular pour gérer des événements comme des salons. Réalisé avec la méthodologie SCRUM au sein
                                d'une équipe de 3 autres étudiants flammands à Courtrai (Belgique) pour la start-up <strong>Book'u</strong> afin de
                                tester la technologie. (Une application mobile avec Ionic avait aussi été réalisé en parallèle)
                            </p>
                        </div>
                    </div>
                </div>
      
                <div className="col s12 m12 l12">
                    <div className="card">
                        <div className="card-image">
                            <img data-fancybox src={oiBaseDoc} alt="Intranet de OI pour gérer la base documentaire"/>
                        </div>
                        <div className="card-action">
                            <h4 className="card-title">Intranet ASP.NET</h4>
                            <a href="https://github.com/loic-leprieur/OI-BaseDocumentaire">Dépot GitHub</a>
                            <p>Pour remplacer une application sous Microsoft Access difficile à maintenir. Lors d'un stage à O-I
                                Manufacturing (verrerie à Gironcourt-sur-Vraine) j'ai réalisé un site web sur l'intranet de l'entreprise en ASP.NET MVC 5 gérant la base documentaire.
                                Il était possible de récupérer les documents du serveur Windows et les afficher sur le site dans un tableau triable, filtrable et avec une barre de recherche, la base de données
                                sous SQL Server a permis de catégoriser les documents à partir de leur nom.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
      </section>
    );
}

export default Portfolio;