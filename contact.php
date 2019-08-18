<?php
    $expediteur = $_POST['expediteur'];
    $message = $_POST['message'];

    // Connect to MySQL
    $mysqli = mysqli_connect('db5000107891.hosting-data.io', 'dbu320355', 'Jwr1runevwhr;', 'dbs102408');

    // Check our connection 
    if($mysqli->connect_error){
        die('Connect Error '. $mysqli->connect_errno . ': ' . $mysqli->connect_error);
    }

    //Create the table
    $sql1 = "CREATE TABLE IF NOT EXISTS `message`
    (id INT PRIMARY KEY NOT NULL,
    expediteur  VARCHAR(100),
    message VARCHAR (800),
    date DATE)";
    $insert1 = $mysqli->query($sql1);

    $sqlMaxId = "SELECT MAX(Id) FROM message";
    $maxId = $mysqli->query($sqlMaxId);

    //Insert our data
    if(isset($expediteur) && isset($message)){
        $newId = mysqli_fetch_array($maxId)[0] + 1;
        $sql2 = "INSERT INTO message (id, expediteur, message, date) VALUES ($newId, '$expediteur', '$message', NOW())";
        $insert2 = $mysqli->query($sql2);

        // Print response from MySQL
        if($insert2) {
            echo '<div class="card blue-grey darken-1" style="margin:0;">Votre message a bien été envoyé</div>';
            mail('leprieurloic@gmail.com', 'Message de leprieur-loic.fr', "De ".$expediteur."\n Message:\n".$message);
        } else {
            die("Error: ($mysqli->errno) : {$mysqli->error}");
        }
    } 
       
    

    // Close our connection
    mysqli_close($mysqli);
?>


<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
     <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="assets\css\materialize.min.css">
    <link rel="stylesheet" href="assets\css\styles.css" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="icon" type="image/png" href="favicon.png" />
    
    <!-- Compiled and minified JavaScript -->
    <script src="assets\js\jquery-3.3.1.min.js"></script>
    <script src="assets\js\materialize.min.js"></script>
    <script src="assets\js\main.js"></script>

    <title>Blog de Loïc</title>
</head>
<body>
    <!-- Navigation section -->
    <nav>
        <div class="nav-wrapper deep-purple darken-3">
          <a href="#!" class="brand-logo"><span class="logo grey-text text-lighten-2">Blog de Loïc LEPRIEUR</span></a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
            <li><a href="/">Accueil</a></li>
            <li><a href="/portofolio.php">Portofolio</a></li>
            <li><a href="#">Infos</a></li>
            <li><a href="/contact.php">Contact</a></li>
          </ul>
        </div>
        <ul class="sidenav" id="mobile-demo">
            <li><a href="/">Accueil</a></li>
            <li><a href="/portofolio.php">Portofolio</a></li>
            <li><a href="#">Infos</a></li>
            <li><a href="/contact.php">Contact</a></li>
        </ul>
    </nav>

    <div class="parallax-container">
        <div class="container">
            <div class="row">
                <form method="post" action="contact.php">
                <div class="input-field">
                    <input type="text" name="expediteur" placeholder="Votre nom" style="color: #FFFF; background-color: rgba(129,140,143,.6);"; />
                    <textarea name="message" placeholder="Entrez votre message ici" rows="40" cols"50" style="height:200px; color: #FFFF; background-color: rgba(129,140,143,.6);"></textarea>
                    <br>
                    <input class="waves-effect waves-light btn" type="submit" value="Envoyer" style="color:#FFFF;">
                </div>
                </form>
            </div>
        </div>
        <div class="parallax"><img src="assets\img\programing-photo.jpg"></div>
       <!--<div class="parallax"><img src="assets\img\backpack.jpeg"></div>-->
    </div>
    <!-- Content -->                                                                                                                                

    <script>
        $(document).ready(function(){
            $('.sidenav').sidenav();
            $('.parallax').parallax();
            $('.carousel').carousel();
        });
    </script>
              
</body>
</html>