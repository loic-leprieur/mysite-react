import Accueil from './Accueil';
import Footer from './Footer';
import './App.css';
import LanguageSkill from './LanguageSkill';
import Experiences from './Experiences';
import Infos from './Infos';
import Contact from './Contact';
import Formation from './Formation';
import Portfolio from './Portfolio';
import React from 'react';
import Navbar from './Navbar';
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement(Accueil, null), /*#__PURE__*/React.createElement(Formation, null), /*#__PURE__*/React.createElement(LanguageSkill, null), /*#__PURE__*/React.createElement(Experiences, null), /*#__PURE__*/React.createElement(Portfolio, null), /*#__PURE__*/React.createElement(Infos, null), /*#__PURE__*/React.createElement(Contact, null), /*#__PURE__*/React.createElement(Footer, null));
}
export default App;