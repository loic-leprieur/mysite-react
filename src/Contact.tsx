import { SetStateAction, useState } from 'react';
import clavier from './assets/img/programing-photo.jpg';
import axios from 'axios';
import ReCaptcha from 'react-recaptcha';
import React from 'react';

function isValidEmail(email: string) {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(email);
}

function Contact() {
  const [message, setMessage] = useState('');
  const [expediteur, setExpediteur] = useState('');
  const [email, setEmail] = useState('');
  //const [status, setStatus] = useState('')
  const [alertMessage, setAlertMessage] = useState('');
  const [alertClass, setAlertClass] = useState('callout not-displayed');
  const [response, setResponse] = useState('');

  const validateForm = () => {
    if (!isValidEmail(email)) {
      setAlertMessage("<strong>ATTENTION : </strong>Votre email n'est pas correct");
      setAlertClass('callout callout-warning');
      return false;
    } else if (message.includes(';')) {
      setAlertMessage("<strong>ATTENTION :</strong>Votre message n'est pas correct");
      setAlertClass('callout callout-warning');
      return false;
    } else {
      setAlertMessage('<strong>SUCCES : </strong>Votre message a bien été envoyé');
      setAlertClass('callout callout-info');
      return true;
    }
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const urlEndpoint = `http://${window.location.host}/contact`;

    if (validateForm()) {
      axios
        .post(
          urlEndpoint,
          { expediteur, email, message, 'g-recaptcha-response': response },
          { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' } }
        )
        .then((response) => {
          //setStatus('success')
          setAlertMessage('<strong>SUCCES : </strong>Votre message a bien été envoyé');
          setAlertClass('callout callout-info');
          console.log(response);
        })
        .catch((error) => {
          //setStatus('error')
          setAlertMessage(
            "<strong>ERREUR : </strong>Une erreur est survenue lors de l'envoi de votre message"
          );
          setAlertClass('callout callout-error');
          console.error(error);
        });
    }
  };

  return (
    <section id="contact">
      <h3>Contact</h3>
      <div className="parallax-container">
        <div className="main container">
          <div
            id="alert-message"
            className={alertClass}
            dangerouslySetInnerHTML={{ __html: alertMessage }}></div>
          <div className="row">
            <form
              onSubmit={handleSubmit}
              id="contact-form"
              action="http://localhost:8000/contact"
              name="contact-form">
              <div className="input-field">
                <label htmlFor="expediteur">Expéditeur</label>
                <input
                  type="text"
                  id="expediteur"
                  name="expediteur"
                  onChange={(e) => setExpediteur(e.target.value)}
                  value={expediteur}
                  placeholder="John DOE"
                  className="input-contact"
                  required
                  autoComplete="name"
                />
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="john.doe@email.com"
                  className="input-contact"
                  required
                  autoComplete="email"
                />
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Bonjour Loïc, je vous contacte concernant..."
                  rows={parseInt('40')}
                  cols={parseInt('50')}
                  required></textarea>
                <br />
                <ReCaptcha
                  sitekey="6LeCU9keAAAAAKv6LbiviEfv9t2IsHsOMbhmnzov"
                  verifyCallback={(response: SetStateAction<string>) => setResponse(response)}
                />
                <br />
                <input
                  id="btnSubmit"
                  className="orange-background waves-effect waves-light btn"
                  type="submit"
                  value="Envoyer"
                />
                <a href="./cgu.html">Conditions d&apos;utilisations</a>
              </div>
            </form>
          </div>
        </div>
        <div className="parallax">
          <img src={clavier} alt="Clavier RGB" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
