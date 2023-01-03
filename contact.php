<?php
$expediteur = isset($_POST['expediteur']) == true ? $_POST['expediteur'] : "Expéditeur non renseigné";
$message = isset($_POST['message']) == true ? $_POST['message'] : "Message non défini";
$email = isset($_POST['email']) == true ? $_POST['email'] : "email@nondefini.com";

// Connect to MySQL

include('./dbconfig/config.php');
$mysqli = mysqli_connect($config['DB_HOST'], $config['DB_USERNAME'], $config['DB_PASSWORD'], $config['DB_DATABASE']);

// Check our connection 
if ($mysqli->connect_error) {
    die('Connect Error ' . $mysqli->connect_errno . ': ' . $mysqli->connect_error);
}

//Create the table
$sql1 = "CREATE TABLE IF NOT EXISTS `message`
    (id INT PRIMARY KEY NOT NULL,
    expediteur VARCHAR(100),
    message VARCHAR (800),
    date DATE,
    email VARCHAR(254));";
$insert1 = $mysqli->query($sql1);

$sqlMaxIdStmt = "SELECT MAX(Id) FROM message";
$maxId = $mysqli->query($sqlMaxIdStmt);

//Insert our data
if (!empty($expediteur) && !empty($message) && !empty($email)) {

    if (isset($_POST['g-recaptcha-response']) && !empty($_POST['g-recaptcha-response'])) {

        $secretAPIkey = '6LeCU9keAAAAACkwRmSieGjdjNlRlgcSIFes4Q7c';

        $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=' . $secretAPIkey . '&response=' . $_POST['g-recaptcha-response']);

        $response = json_decode($verifyResponse);
        if ($response->success) {
            $newId = mysqli_fetch_array($maxId)[0] + 1;
            /*$sql2 = "INSERT INTO message (id, expediteur, message, date, email) VALUES ($newId, '$expediteur', '$message', NOW(), '$email')";*/

            $date = date("Y-m-d h:i:sa");

            /*$insert2 = $mysqli->query($sql2);*/
            $statement = $mysqli->prepare("INSERT INTO message VALUES(?,?,?,?,?)");
            $statement->bind_param("sssss", $newId, $expediteur, $message, $date, $email);

            $statement->execute();

            // Send email after SQL query
            if ($statement) {
                mail('leprieurloic@gmail.com', 'Message de loic-leprieur.fr', "De " . $expediteur . "\nMessage:\n" . $message);
            } else {
                die("Error: ($mysqli->errno) : {$mysqli->error}");
            }
        } else {
            $response = array(
                "status" => "alert-danger",
                "message" => "Robot verification failed, please try again."
            );
        }
    } else {
    }
}

// Close our connection
mysqli_close($mysqli);
?>

<script src="https://www.google.com/recaptcha/api.js" async defer></script>

<script>
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
</script>