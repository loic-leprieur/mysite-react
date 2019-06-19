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
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Portofolio</a></li>
            <li><a href="#">Infos</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <ul class="sidenav" id="mobile-demo">
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Portofolio</a></li>
            <li><a href="#">Infos</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>

    <!-- Menu section -->
    <div class="parallax-container">
        <div class="container">
            <div class="row">
                <img class="col m4 s12" id="profil-img" style="padding-top:21px" width="200px" src="assets\img\profil.jpg"></img>
                <div class="col s12 m8"><h4 id="presentation-title" class="thin-text left-align white-text lignten-3-text valign">Jeune analyste développeur </br> </br>Grand-Est France</h4></div>
                <a href="mailto:leprieurloic@gmail.com" class="waves-effect btn-large hoverable red accent-2">Contactez-moi</a>
            </div>
        </div>
        <div class="parallax"><img src="assets\img\programing-photo.jpg"></div>
       <!--<div class="parallax"><img src="assets\img\backpack.jpeg"></div>-->
    </div>
    <!-- Content -->
    <div class="container">

        <div class="row">
            <h2>Formation</h2>
        </div>
        <div class="row">
            <div class="col 16 m6 s12">
                <div class="card">
                    <div class="card-image">
                        <img src="assets/img/vives.jpg">
                    </div>
                    <div class="card-content">
                        <h3 class="center-align">DUETI Informatique</h3>
                        <div class="divider"></div>
                        <p>Séjour Erasmus+ en Belgique : perfectionnement à Anglais technique et conversationnel.
                            J'ai approfondi mes connaissance en développement web avec ASP.NET et Java EE et en développement mobile avec iOS et Android.
                        </p>                    
                    </div>
                        <div class="card-action">
                            <a href="http://limesurvey.vives.be/survey/upload/surveys/335951/files/1718-HWB-Kortrijk-Informatics.pdf">Plus d'informations</a>
                        </div>
    
                    </div>            
                </div>
            <div class="col 16 m6 s12">
                <div class="card">
                    <div class="card-image">
                        <img src="assets/img/iut-logo.png">
                    </div>
                        <div class="card-content">
                            <h3 class="center-align">DUT Informatique</h3>
                            <div class="divider"></div>
                            <span class="card-title">IUT Nancy Charlemagne</span>
                            <p>Apprentissage de l’algorithmie, de la programmation orientée objet, de la programmation orientée machine et aux systèmes, de la confection d'interfaces homme-machine, de la conception et à la gestion de bases de données relationnelles, du développement de sites web.
                            </p>             
                        </div>
                        <div class="card-action">
                            <a href="http://iut-charlemagne.univ-lorraine.fr/content/departement-informatique">Plus d'informations</a>
                        </div>
    
                    </div>
            
            
                </div>
        </div>
        <div class="row">
            <h2>Expériences</h2>
        </div>
        <div class="row">
            <div class="col 16 m12 s12">
                <div class="card medium deep-purple accent-4 z-depth-2">
                    <div class="card-content white-text">
                        <h3 class="center-align">Switch IT</h3>
                        <div class="divider"></div>
                        <span class="card-title">Leudelange, Luxembourg (3 mois)</span>
                        <p>Ajout de fontionnalités dans une application web en ASP.NET Forms à destination de courtiers d'assurances vie.
                            Création de contrôles graphiques (listes, datepickers, tchat...) au sein d'une librairie PCL utilisée dans des projets Xamarin.Forms tel qu'un ChatBot.</p>
                    </div>
                </div>            
            </div>
        </div>

        <div class="row">
            <div class="col 16 m12 s12">
                <div class="card medium deep-purple accent-4 z-depth-2">
                    <div class="card-content white-text">
                        <h3 class="center-align">Book'u</h3>
                        <div class="divider"></div>
                        <span class="card-title">Kortrijk, Belgique (3 mois)</span>
                        <p></p>
                    </div>
                </div>            
            </div>
        </div>

        <div class="row">
            <div class="col 16 m12 s12">
                <div class="card medium deep-purple accent-4 z-depth-2">
                    <div class="card-content white-text">
                        <h3 class="center-align">O-I Manufacturing</h3>
                        <div class="divider"></div>
                        <span class="card-title">Gironcourt-sur-Vraine (10 semaines)</span>
                        <p></p>
                    </div>
                </div>            
            </div>
        </div>

    </div>                                                                                                                                 

    <script>
        $(document).ready(function(){
            $('.sidenav').sidenav();
            $('.parallax').parallax();
            $('.carousel').carousel();
        });
    </script>
              
</body>
</html>