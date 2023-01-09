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
                mail('leprieurloic@gmail.com', "Message de " . $email, "De " . $expediteur . "\nMessage:\n" . $message, "From: contact@loic-leprieur.fr");
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
