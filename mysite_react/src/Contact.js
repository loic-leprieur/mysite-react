import React from "react";
import clavier from "./img/programing-photo.jpg";
import $ from 'jquery';
import axios from 'axios';
import { useState } from "react";

function isValidEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function validateForm() {

    if (!isValidEmail($("#email").text)) {
        $('#alert-message').css('display', 'block');
        $('#alert-message').removeClass('alert-warning');
        $('#alert-message').addClass('alert-success');
        $('#alert-message').text('Email invalide');
        return false;
    } else {
        if ($('#message').value.indexOf(';') !== -1) {
            $('#alert-message').css('display', 'block');
            $('#alert-message').removeClass('alert-success');
            $('#alert-message').addClass('alert-warning');
            $('#alert-message').text('Votre message n\'est pas correct');
            return false;
        } else {
            $('#alert-message').css('display', 'block');
            $('#alert-message').removeClass('alert-warning');
            $('#alert-message').addClass('alert-success');
            $('#alert-message').text('Votre message a bien été envoyé');
            return true;
        }
    }
}

function Contact(){
    const [message, setMessage] = useState('');
    const [expediteur, setExpediteur] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    
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
        if(validateForm()) {
            axios.post('http://localhost:8000/contact', {
                expediteur: expediteur,
                email: email,
                message: message
            })
            .then(response => {
            setStatus('success');
            alert(response);
            })
            .catch(error => {
            setStatus('error');
            alert(error);
            });
        }
    };

    return (
        <section id="contact">
            <h3>Contact</h3>
            <div className="parallax-container">
                <div className="main container">
                    <div id="alert-message" className="alert not-displayed">
                        {/* render form elements */}
                        {status === 'success' && <p>Your message was sent successfully!</p>}
                        {status === 'error' && <p>Your message has thrown errors!</p>}
                    </div>
                    <div className="row">
                        <form method="post" id="contact-form" action="http://localhost:8000/contact" name="contact-form">
                            <div className="input-field">

                                <label htmlFor="expediteur">Expéditeur</label>
                                <input type="text" id="expediteur" name="expediteur" onChange={handleChangeExpediteur} value={expediteur} placeholder="John DOE" className="input-contact" required/>

                                <label htmlFor="email">E-mail</label>
                                <input type="email" id="email" name="email" onChange={handleChangeEmail} value={email} placeholder="john.doe@email.com" className="input-contact" required/>

                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" value={message} onChange={handleChangeMessage} placeholder="Bonjour Loïc, je vous contacte concernant..." rows="40" cols="50" required></textarea>
                                <br/>
                                {/*<div className="g-recaptcha" data-sitekey="6LeCU9keAAAAAKv6LbiviEfv9t2IsHsOMbhmnzov"></div>
                                <br/>*/}

                                <input id="btnSubmit" onSubmit={handleSubmit} className="orange-background waves-effect waves-light btn" type="submit" value="Envoyer"/>
                                <a href="./cgu.html">Conditions d'utilisations</a>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="parallax"><img src={clavier} alt="Clavier RGB"/></div>
          </div>
    </section>
    );
}

export default Contact;