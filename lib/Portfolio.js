import shopNcook from "./img/screenshot_appli_ShopNCook.jpg";
import demoCrazyBox from "./video/demo-crazybox.mp4";
import crazyBox from "./img/crazybox.png";
import xamarinApp from "./img/tchat-img.jpg";
import todoList from "./img/screenshot _app_TodoList.jpg";
import aventureTextuelle from "./img/screenshot_aventure_textuelle.jpg";
import bookuApp from "./img/booku-appli-screenshot.gif";
import oiBaseDoc from "./img/basedocumentaireOI.png";
import React from "react";
function Portfolio() {
  return /*#__PURE__*/React.createElement("section", {
    id: "portfolio",
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    id: "main",
    className: "portfolio"
  }, /*#__PURE__*/React.createElement("h3", null, "Portfolio"), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col s12 m6 l4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-image"
  }, /*#__PURE__*/React.createElement("img", {
    "data-fancybox": true,
    src: shopNcook,
    alt: "Appli de recherche de recettes"
  })), /*#__PURE__*/React.createElement("div", {
    className: "card-action"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "card-title"
  }, "Application Shop&Cook"), /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/loic-leprieur/shop-and-cook"
  }, "D\xE9p\xF4t GitHub"), /*#__PURE__*/React.createElement("p", null, "Application Android de recherche de recette via une API et d'enregistrements d'ingr\xE9dients")))), /*#__PURE__*/React.createElement("div", {
    className: "col s12 m6 l4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-image"
  }, /*#__PURE__*/React.createElement("img", {
    "data-fancybox": true,
    src: crazyBox,
    alt: "Page d'accueil de CrazyBox"
  })), /*#__PURE__*/React.createElement("div", {
    className: "card-action"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "card-title"
  }, "CrazyBox"), /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/loic-leprieur/CrazyBox"
  }, "D\xE9p\xF4t GitHub"), /*#__PURE__*/React.createElement("p", null, "Site web en PHP et jQuery pour la cr\xE9ation de pochettes cadeaux. R\xE9alis\xE9 lors du hackaton 'Crazy Charly Day' de l'IUT Charlemagne"), /*#__PURE__*/React.createElement("video", {
    "data-fancybox": true,
    href: demoCrazyBox,
    controls: true,
    loop: true,
    autoPlay: true,
    preload: "auto",
    width: "250px"
  }, /*#__PURE__*/React.createElement("source", {
    src: demoCrazyBox,
    type: "video/mp4"
  }), "Sorry, your browser doesn't support embedded videos.")))), /*#__PURE__*/React.createElement("div", {
    className: "col s12 m6 l4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-image"
  }, /*#__PURE__*/React.createElement("img", {
    "data-fancybox": true,
    src: xamarinApp,
    alt: "Module de tchat dans une appli Xamarin"
  })), /*#__PURE__*/React.createElement("div", {
    className: "card-action"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "card-title"
  }, "Application Xamarin de tchat"), /*#__PURE__*/React.createElement("p", null, "Composant UI/UX dans une biblioth\xE8que PCL (avec d'autres modules g\xE9n\xE9riques) pour cr\xE9er un environnement de tchat (ex: Messenger)")))), /*#__PURE__*/React.createElement("div", {
    className: "col s12 m6 l4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-image"
  }, /*#__PURE__*/React.createElement("img", {
    "data-fancybox": true,
    src: todoList,
    alt: "Liste de t\xE2ches \xE0 faire dans une app Android"
  })), /*#__PURE__*/React.createElement("div", {
    className: "card-action"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "card-title"
  }, "Application Todo list Android"), /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/loic-leprieur/TodoList"
  }, "D\xE9p\xF4t GitHub"), /*#__PURE__*/React.createElement("p", null, "Application utilisant une base de donn\xE9es locale pour stocker des t\xE2ches \xE0 accomplir dans une liste modifiable. Impl\xE9mentation de CRUD et de contr\xF4les UI sur les smartphones Android.")))), /*#__PURE__*/React.createElement("div", {
    className: "col s12 m6 l4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-image"
  }, /*#__PURE__*/React.createElement("img", {
    "data-fancybox": true,
    src: aventureTextuelle,
    alt: "Niveau de base avec une porte, une cl\xE9 et un mobilier"
  })), /*#__PURE__*/React.createElement("div", {
    className: "card-action"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "card-title"
  }, "Jeu d'aventures textuelles"), /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/loic-leprieur/jeu-aventure-textuel"
  }, "D\xE9p\xF4t GitHub"), /*#__PURE__*/React.createElement("p", null, "Jeu d'aventures textuelles r\xE9alis\xE9 avec un analyseur synthaxique et un \xE9diteur de niveaux. Le principe repose sur les jeux des ann\xE9es 80's o\xF9 l'on saisissait du texte pour ex\xE9cuter des actions et dont la probl\xE9matique reposait sur les commandes comprises par l'ordinateur et l'encha\xEEnement des puzzles avec les objets et les \xE9l\xE9ments du d\xE9cor. Application r\xE9alis\xE9e avec Java FX en version 8.")))), /*#__PURE__*/React.createElement("div", {
    className: "col s12 m6 l4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-image"
  }, /*#__PURE__*/React.createElement("img", {
    "data-fancybox": true,
    src: bookuApp,
    alt: "Page listant les p\xE9riodes de disponibilit\xE9"
  })), /*#__PURE__*/React.createElement("div", {
    className: "card-action"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "card-title"
  }, "Gestionnaire d'\xE9venements \xE0 Book'U"), /*#__PURE__*/React.createElement("p", null, "Application web Angular pour g\xE9rer des \xE9v\xE9nements comme des salons. R\xE9alis\xE9 avec la m\xE9thodologie SCRUM au sein d'une \xE9quipe de 3 autres \xE9tudiants flammands \xE0 Courtrai (Belgique) pour la start-up ", /*#__PURE__*/React.createElement("strong", null, "Book'u"), " afin de tester la technologie. (Une application mobile avec Ionic avait aussi \xE9t\xE9 r\xE9alis\xE9 en parall\xE8le)")))), /*#__PURE__*/React.createElement("div", {
    className: "col s12 m12 l12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-image"
  }, /*#__PURE__*/React.createElement("img", {
    "data-fancybox": true,
    src: oiBaseDoc,
    alt: "Intranet de OI pour g\xE9rer la base documentaire"
  })), /*#__PURE__*/React.createElement("div", {
    className: "card-action"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "card-title"
  }, "Intranet ASP.NET"), /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/loic-leprieur/OI-BaseDocumentaire"
  }, "D\xE9pot GitHub"), /*#__PURE__*/React.createElement("p", null, "Pour remplacer une application sous Microsoft Access difficile \xE0 maintenir. Lors d'un stage \xE0 O-I Manufacturing (verrerie \xE0 Gironcourt-sur-Vraine) j'ai r\xE9alis\xE9 un site web sur l'intranet de l'entreprise en ASP.NET MVC 5 g\xE9rant la base documentaire. Il \xE9tait possible de r\xE9cup\xE9rer les documents du serveur Windows et les afficher sur le site dans un tableau triable, filtrable et avec une barre de recherche, la base de donn\xE9es sous SQL Server a permis de cat\xE9goriser les documents \xE0 partir de leur nom.")))))));
}
export default Portfolio;