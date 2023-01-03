$("#btnSubmit").on("click", function() {
    var $this = $(this);
    var $caption = $this.html();
    var form = "#contact-form";
    var formData = $(form).serializeArray();
    var route = $(form).attr('action');

    $.ajax({
        type: POST,
        url: route,
        data: formData,
        beforeSend: function() {
            $this.attr('disabled', true).html('Processing...');
        },
        success: function(response) {
            response = JSON.parse(response);

            validateForm();

            // Check if there is has_error property on json response from the server
            if (!response.hasOwnProperty('has_error')) {
                // Reload lists of employees
                all();

                // We will display the result using alert
                Swal.fire({
                    icon: 'success',
                    title: 'Success.',
                    text: response.response
                });

                // Reset form
                resetForm(form);
            } else {
                // We will display the result using alert
                validationForm("#contact-form", response.errors);
            }

            $this.attr('disabled', false).html($caption);

        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            // You can put something here if there is an error from submitted request
        }
    });
});

function validateForm() {
    var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailReg.test(contact - form.email.value)) {
        $('#alert-message').css('display', 'block');
        $('#alert-message').removeClass('alert-warning');
        $('#alert-message').addClass('alert-success');
        $('#alert-message').text('Email invalide');
        alert('email incorrect');
        return false;
    } else {
        if ($('#message').value.indexOf(';') = !-1) {
            $('#alert-message').css('display', 'block');
            $('#alert-message').removeClass('alert-success');
            $('#alert-message').addClass('alert-warning');
            $('#alert-message').text('Votre message n\'est pas correct');
            alert('message incorrect');
            return false;
        } else {
            $('#alert-message').css('display', 'block');
            $('#alert-message').removeClass('alert-warning');
            $('#alert-message').addClass('alert-success');
            $('#alert-message').text('Votre message a bien été envoyé');
            alert('message envoyé');
            return true;
        }
    }
}