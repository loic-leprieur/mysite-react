import profil from "./img/profil.jpg";
import programming from "./img/programing-photo-1.jpg";
import React from "react";
function Accueil() {
  // eslint-disable-next-line no-unused-vars
  function nbYearsSinceBirthday() {
    const pastDate = '1996-05-17';
    const period = new Date(new Date().getTime() - new Date(pastDate).getTime());
    return period.getFullYear() - 1970; // at 1970 the date calendar starts
  }

  return /*#__PURE__*/React.createElement("section", {
    id: "accueil",
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "parallax-container row valign-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-profile container center-align valign-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row invisible",
    id: "banner-profile"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col s12 m12 l4 center-align"
  }, /*#__PURE__*/React.createElement("img", {
    id: "profile-img",
    src: profil,
    alt: "Portrait de Lo\xEFc"
  })), /*#__PURE__*/React.createElement("div", {
    id: "profile-body",
    className: "col s12 m12 l8 center-align white-text lignten-3-text"
  }, /*#__PURE__*/React.createElement("h1", {
    id: "title-job"
  }, "Lo\xEFc ", nbYearsSinceBirthday(), " ans, Analyste\xA0d\xE9veloppeur"), /*#__PURE__*/React.createElement("h2", {
    className: "s12 text-justify",
    id: "profile-text"
  }, "Passionn\xE9 par les nouvelles technologies et leurs apports au quotidien de chacun(e)."), /*#__PURE__*/React.createElement("div", {
    id: "mail-button",
    className: "s12 waves-effect btn-large hoverable amber darken-4"
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:contact@loic-leprieur.fr?subject=Site web (Accueil)",
    className: "white-text valign-wrapper"
  }, /*#__PURE__*/React.createElement("i", {
    className: "medium material-icons"
  }, "mail_outline"), "\xA0", /*#__PURE__*/React.createElement("span", {
    className: "center-align"
  }, "Email")))))), /*#__PURE__*/React.createElement("div", {
    className: "parallax"
  }, /*#__PURE__*/React.createElement("img", {
    id: "parallax-img1",
    src: programming,
    alt: "Clavier RGB"
  }))));
}
export default Accueil;