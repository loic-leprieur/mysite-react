import React from "react";
import clavier from "./img/programing-photo.jpg";
import $ from 'jquery';

function onFormSubmit() {

    var $this = $(this);
    //var $caption = $this.html();
    var form = "#contact-form";
    var formData = $(form).serializeArray();

    var request = $.ajax({
        type: 'POST',
        url: "contact.php",
        data: formData,
        beforeSend: function() {
            $this.attr('disabled', true).html('Chargement...');
            if(request != null && !validateForm()){
                request.abort();
            }
        },
        success: function(response) {
            response = JSON.parse(response);

            $('#alert-message').css('display', 'block');
            $('#alert-message').removeClass('alert-warning');
            $('#alert-message').addClass('alert-success');
            $('#alert-message').text('Votre message a bien été envoyé');
            
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            // You can put something here if there is an error from submitted request
        }
    });
}

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
            return true;
        }
    }
}

function Contact(){
    return (
        <section id="contact">
            <h3>Contact</h3>
            <div className="parallax-container">
                <div className="main container">
                    <div id="alert-message" className="alert not-displayed"></div>
                    <div className="row">
                        <form method="post" action="/contact.php" id="contact-form" name="contact-form">
                            <div className="input-field">

                                <label for="expediteur">Expéditeur</label>
                                <input type="text" id="expediteur" name="expediteur" placeholder="John DOE" className="input-contact" required/>

                                <label for="email">E-mail</label>
                                <input type="email" id="email" name="email" placeholder="john.doe@email.com" className="input-contact" required/>

                                <label for="message">Message</label>
                                <textarea id="message" name="message" placeholder="Bonjour Loïc, je vous contacte concernant..." rows="40" cols="50" required></textarea>
                                <br/>
                                <div className="g-recaptcha" data-sitekey="6LeCU9keAAAAAKv6LbiviEfv9t2IsHsOMbhmnzov"></div>
                                <br/>

                                <input id="btnSubmit" onSubmit={onFormSubmit()} className="orange-background waves-effect waves-light btn" type="submit" value="Envoyer"/>
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