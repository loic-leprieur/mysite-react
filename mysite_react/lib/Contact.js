import React from "react";
import clavier from "./img/programing-photo.jpg";
import $ from 'jquery';
import axios from 'axios';
import ReCaptcha from 'react-recaptcha';
import { useState } from "react";
function isValidEmail(email) {
  var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(email);
}
function setCalloutEmailWarning() {
  $('#alert-message').css('display', 'block');
  $('#alert-message').removeClass('callout-info');
  $('#alert-message').addClass('callout-warning');
  $('#alert-message').html('<strong>ATTENTION : </strong>Votre email n\'est pas correct');
}
function setCalloutMessageWarning() {
  $('#alert-message').css('display', 'block');
  $('#alert-message').removeClass('callout-info');
  $('#alert-message').addClass('callout-warning');
  $('#alert-message').html('<strong>ATTENTION :</strong>Votre message n\'est pas correct');
}
function setCalloutSuccess() {
  $('#alert-message').css('display', 'block');
  $('#alert-message').removeClass('.callout-warning');
  $('#alert-message').addClass('callout-info');
  $('#alert-message').html('<strong>SUCCES : </strong>Votre message a bien été envoyé');
}
function setCalloutError() {}
function validateForm() {
  if (!isValidEmail($("#email").val())) {
    setCalloutEmailWarning();
    return false;
  } else {
    if ($('#message').val().indexOf(';') !== -1) {
      setCalloutMessageWarning();
      return false;
    } else {
      setCalloutSuccess();
      return true;
    }
  }
}
function Contact() {
  const [message, setMessage] = useState('');
  const [expediteur, setExpediteur] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [response, setResponse] = useState(null);
  const handleChangeMessage = event => {
    setMessage(event.target.value);
  };
  const handleChangeExpediteur = event => {
    setExpediteur(event.target.value);
  };
  const handleChangeEmail = event => {
    setEmail(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault(); // empêche le rechargement de la page

    if (validateForm()) {
      axios.post('http://localhost:8000/contact', {
        expediteur: expediteur,
        email: email,
        message: message,
        'g-recaptcha-response': response
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        }
      }).then(response => {
        setStatus('success');
        console.log(response);
      }).catch(error => {
        setStatus('error');
        console.error(error);
      });
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "contact"
  }, /*#__PURE__*/React.createElement("h3", null, "Contact"), /*#__PURE__*/React.createElement("div", {
    className: "parallax-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "main container"
  }, /*#__PURE__*/React.createElement("div", {
    id: "alert-message",
    className: "callout not-displayed"
  }, /*#__PURE__*/React.createElement(If, {
    condition: status === 'success'
  }, "setCalloutSuccess(); return ", /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "SUCCESS: "), "Your message was sent successfully!")), /*#__PURE__*/React.createElement(If, {
    condition: status === 'error'
  }, "setCalloutError(); return ", /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "ERROR: "), "Your message has thrown errors!"))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("form", {
    method: "post",
    onSubmit: e => handleSubmit(e),
    id: "contact-form",
    action: "http://localhost:8000/contact",
    name: "contact-form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "input-field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "expediteur"
  }, "Exp\xE9diteur"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "expediteur",
    name: "expediteur",
    onChange: handleChangeExpediteur,
    value: expediteur,
    placeholder: "John DOE",
    className: "input-contact",
    required: true
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "email"
  }, "E-mail"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    onChange: handleChangeEmail,
    value: email,
    placeholder: "john.doe@email.com",
    className: "input-contact",
    required: true
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "message"
  }, "Message"), /*#__PURE__*/React.createElement("textarea", {
    id: "message",
    name: "message",
    value: message,
    onChange: handleChangeMessage,
    placeholder: "Bonjour Lo\xEFc, je vous contacte concernant...",
    rows: "40",
    cols: "50",
    required: true
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(ReCaptcha, {
    sitekey: "6LeCU9keAAAAAKv6LbiviEfv9t2IsHsOMbhmnzov",
    verifyCallback: response => setResponse(response)
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    id: "btnSubmit",
    className: "orange-background waves-effect waves-light btn",
    type: "submit",
    value: "Envoyer"
  }), /*#__PURE__*/React.createElement("a", {
    href: "./cgu.html"
  }, "Conditions d'utilisations"))))), /*#__PURE__*/React.createElement("div", {
    className: "parallax"
  }, /*#__PURE__*/React.createElement("img", {
    src: clavier,
    alt: "Clavier RGB"
  }))));
}
export default Contact;