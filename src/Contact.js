import React from 'react'
import clavier from './assets/img/programing-photo.jpg'
import $ from 'jquery'
import axios from 'axios'
import ReCaptcha from 'react-recaptcha'
import { useState } from 'react'

function isValidEmail(email) {
  var regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  return regex.test(email)
}

function setCalloutEmailWarning() {
  $('#alert-message').css('display', 'block')
  $('#alert-message').removeClass('callout-info')
  $('#alert-message').addClass('callout-warning')
  $('#alert-message').html("<strong>ATTENTION : </strong>Votre email n'est pas correct")
}

function setCalloutMessageWarning() {
  $('#alert-message').css('display', 'block')
  $('#alert-message').removeClass('callout-info')
  $('#alert-message').addClass('callout-warning')
  $('#alert-message').html("<strong>ATTENTION :</strong>Votre message n'est pas correct")
}

function setCalloutSuccess() {
  $('#alert-message').css('display', 'block')
  $('#alert-message').removeClass('callout-warning')
  $('#alert-message').addClass('callout-info')
  $('#alert-message').html('<strong>SUCCES : </strong>Votre message a bien été envoyé')
}

// eslint-disable-next-line
function setCalloutError() {
  $('#alert-message').css('display', 'block')
  $('#alert-message').removeClass('callout-info')
  $('#alert-message').removeClass('callout-warning')
  $('#alert-message').addClass('callout-error')
  $('#alert-message').html(
    "<strong>ERREUR : </strong>Une erreur est survenue lors de l'envoi de votre message"
  )
}

function validateForm() {
  if (!isValidEmail($('#email').val())) {
    setCalloutEmailWarning()
    return false
  } else {
    if ($('#message').val().indexOf(';') !== -1) {
      setCalloutMessageWarning()
      return false
    } else {
      setCalloutSuccess()
      return true
    }
  }
}

function Contact() {
  const [message, setMessage] = useState('')
  const [expediteur, setExpediteur] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const [response, setResponse] = useState(null)

  const handleChangeMessage = (event) => {
    setMessage(event.target.value)
  }

  const handleChangeExpediteur = (event) => {
    setExpediteur(event.target.value)
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault() // empêche le rechargement de la page

    if (validateForm()) {
      axios
        .post(
          'http://localhost:8000/contact',
          {
            expediteur: expediteur,
            email: email,
            message: message,
            'g-recaptcha-response': response
          },
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            }
          }
        )
        .then((response) => {
          setStatus('success')
          console.log(response)
        })
        .catch((error) => {
          setStatus('error')
          console.error(error)
        })
    }
  }

  return (
    <section id="contact">
      <h3>Contact</h3>
      <div className="parallax-container">
        <div className="main container">
          {/* Error/sucess of the POST request */}
          <div id="alert-message" className="callout not-displayed">
            {status === 'success' ? setCalloutSuccess.bind(this) : setCalloutError.bind(this)}
          </div>
          <div className="row">
            <form
              method="post"
              onSubmit={(e) => handleSubmit(e)}
              id="contact-form"
              action="http://localhost:8000/contact"
              name="contact-form">
              <div className="input-field">
                <label htmlFor="expediteur">Expéditeur</label>
                <input
                  type="text"
                  id="expediteur"
                  name="expediteur"
                  onChange={handleChangeExpediteur}
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
                  onChange={handleChangeEmail}
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
                  onChange={handleChangeMessage}
                  placeholder="Bonjour Loïc, je vous contacte concernant..."
                  rows="40"
                  cols="50"
                  required></textarea>
                <br />
                <ReCaptcha
                  sitekey="6LeCU9keAAAAAKv6LbiviEfv9t2IsHsOMbhmnzov"
                  verifyCallback={(response) => setResponse(response)}
                />
                <br />

                <input
                  id="btnSubmit"
                  className="orange-background waves-effect waves-light btn"
                  type="submit"
                  value="Envoyer"
                />
                <a href="./cgu.html">Conditions d'utilisations</a>
              </div>
            </form>
          </div>
        </div>
        <div className="parallax">
          <img src={clavier} alt="Clavier RGB" loading="lazy" />
        </div>
      </div>
    </section>
  )
}

export default Contact
