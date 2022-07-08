<?php require 'header.php'; ?>

<section id="accueil" class="section">
	<div class="parallax-container row valign-wrapper">
		<div class="container-profile container center-align valign-wrapper">
			<div class="row" id="banner-profile" style="opacity: 0;">
				<div class="col s12 m5 l4 center-align">
					<img id="profile-img" src="\assets\img\profil.jpg" alt="Portrait de Loïc"></img>
				</div>
				<div id="profile-body" class="col s12 m7 l8 center-align white-text lignten-3-text">
					<h1 id="title-job">Loïc, Analyste&nbsp;développeur,
						<?php $now = date_create();

						$anniv = date_create("1996-05-17 00:00:00");
						echo $anniv->diff($now)->format("%y ans");
						?>
					</h1>
					<h2 id="profile-text" class="text-justify">
						Passionné par les nouvelles technologies et leurs apports au quotidien de chacun(e).
					</h2>
					<div id="mail-button" class="s12 waves-effect btn-large hoverable amber darken-4">
						<a href="mailto:contact@loic-leprieur.fr?subject=Site web (Accueil)" class="white-text valign-wrapper">
							<i class="medium material-icons">mail_outline</i>&nbsp;<span class="center-align">Email</span>
						</a>
					</div>
				</div>

			</div>
		</div>
		<div class="parallax">
			<img id="parallax-img1" src="\assets\img\programing-photo-1.jpg" alt="Photo d'un clavier" style="min-height:1000px;">
		</div>
	</div>

	<!-- Content -->
	<div class="section grey darken-4">
		<div class="carousel carousel-slider center">
			<div id="carousel-item-dueti" class="carousel-item">
				<img src="/assets/img/vives-1.png" alt="Globe terrestre" class="carousel-background" />
				<div class="carousel-content">
					<div class="headline">
						<h3 class="center-align">DUETI (Erasmus)</h3>
						<h4 class="center-align">2016-2017</h4>
					</div>
					<div class="description">
						<p class="white-text">
							Séjour Erasmus+ en Belgique : perfectionnement à l'Anglais
							technique et conversationnel.<br />Approfondissement de mes
							connaissances en développement web avec ASP.NET et Java EE et en
							développement mobile avec iOS (Swift) et Android (Java).<br />Travaux
							individuels avec évaluation du tuteur et un projet de fin de
							semestre en groupe.
						</p>
					</div>
				</div>
			</div>
			<div id="carousel-item-dut" class="carousel-item">
				<img src="/assets/img/iut-1.jpg" alt="Lignes de code" class="carousel-background" />
				<div class="carousel-content">
					<div class="headline">
						<h3 class="center-align">DUT Informatique</h3>
						<h4 class="center-align">2014-2016</h4>
					</div>
					<div class="description">
						<ul class="white-text">
							<li>Algorithmie et structures de données</li>
							<li>Programmation orientée objets (Java) et machine (C)</li>
							<li>Développement web avec PHP (backend) et JS (frontend)</li>
							<li>Création d'interfaces homme-machine</li>
							<li>Bases de données relationnelles (Oracle et MySQL</li>
							<li>Systèmes et réseaux Linux (Bash et lignes de commandes)</li>
							<li>Comptabilité et économie</li>
						</ul>
					</div>
				</div>
			</div>
			<div id="carousel-item-acors" class="carousel-item">
				<img src="assets/img/acors-illustration.jpg" alt="Texte coloré de 'Social Media'" class="carousel-background" />
				<div class="carousel-content">
					<div class="headline">
						<h3 class="center-align">Niveau Licence ACORS</h3>
						<h4 class="center-align">2018-2019</h4>
					</div>
					<div class="description">
						<p class="white-text">
							Niveau de la Licence professionnelle Animation des Communautés et Réseaux Socio-numériques.
							Formation focalisé sur la communication numérique, l'infographie (Illustrator), le développement de sites vitrines avec PHP et Wordpress, le SEO et la rédaction pour le web.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="parallax-container" style="display: flex; justify-content: center; align-items: center;">
		<div class="container-profile container center-align valign-wrapper">
			<h4>Understanding and practicing English is a key factor in any modern profesional context.<br /><br />My Erasmus stay helped me to bring my language level to another dimension.</h4>
		</div>
		<div class="parallax">

			<img src="\assets\img\brugges-erasmus.jpg" alt="Atomium de Bruxelles">

		</div>
	</div>

	<div class="section white darken-4">
		<div class="row">
			<div class="col l4 m6 s12">
				<div class="card large white darken-4 z-depth-2">
					<img src="/assets/img/mercedes.jpg" alt="Voiture Mercedes rouge" />
					<div class="card-content">
						<div class="headline">
							<h3 class="center-align card-title">La Fabrik à ID</h3>
							<h4 class="center-align">Bischheim</h4>
							<h5 class="center-align">Janvier 2022</h5>
						</div>

						<div class="divider"></div>
						<p class="job-description">
							La start-up <strong>La Fabrik à ID</strong> travaille avec les concessionnaires automobile notamment Mercedes
							pour la digitalisation du parcours client avec des scanners de plaques et un CRM intégré.
						</p>
						<p class="job-description">
							Bien que court, mon passage m'a permis de cerner les enjeux techniques et fonctionnels des solutions proposées et j'ai pu participer
							à la mise en place du nouveau CRM en intégrant les composants de création de compte de vendeurs, la gestion des utilisateurs ou encore la création et la gestion d'équipes.
						</p>
					</div>
				</div>
			</div>
			<div class="col l4 m6 s12">
				<div class="card large white darken-4 z-depth-2">
					<img src="/assets/img/carte-bancaire.jpg" alt="Carte bancaire" />
					<div class="card-content">
						<div class="headline">
							<h3 class="center-align card-title">SII Est Strasbourg / Euro-Information Développement</h3>
							<h4 class="center-align">Strasbourg</h4>
							<h5 class="center-align">CDI de juillet 2021 à novembre 2021</h5>
						</div>

						<div class="divider"></div>
						<p class="job-description">
							Euro-Information Développement est la filiale technologique du groupe Crédit Mutuel-CIC.
						</p>
						<p class="job-description">
							J'ai rejoint la partie monétique - recouvrement commerçant afin d'améliorer et de maintenir les applications
							intranet en C# / ASP.NET (framework Devbooster) dont des solutions pour l'historisation des cartes et des transactions et le suspens / annulation des remises.
						</p>
					</div>
				</div>
			</div>
			<div class="col l4 m6 s12">
				<div class="card large white darken-4 z-depth-2">
					<img src="/assets/img/kp1-4.jpg" alt="Chantier avec des grues" />
					<div class="card-content">
						<div class="headline">
							<h3 class="center-align card-title">2S2I Solutions / KP1</h3>
							<h4 class="center-align">Chaumont</h4>
							<h5 class="center-align">CDI de janvier 2020 à mars 2021</h5>
						</div>

						<div class="divider"></div>
						<p class="job-description">
							KP1 est une société incontournable du bâtiment en France.
							Elle est spécialisée dans le béton pré-contrainte et conçoit ses propres logiciels
							de CAO en 2D/3D pour élaborer des produits en BIM.
						</p>
						<p class="job-description">
							Chargé de reprendre le développement d'un outils de dessin essentiel pour les bureaux d'études,
							je monte en compétences et je propose des solutions afin de l'améliorer.
						</p>
					</div>
				</div>
			</div>

			<div class="col l4 m6 s12">
				<div class="card large white darken-4 z-depth-2">
					<img src="/assets/img/switch-1.jpg" alt="Article avec des statistiques financières" />
					<div class="card-content">
						<div class="headline">
							<h3 class="center-align card-title">Switch IT</h3>
							<h4 class="center-align">Leudelange, Luxembourg</h4>
							<h5 class="center-align">CDI en 2017</h5>
						</div>

						<div class="divider"></div>
						<p class="job-description">
							Switch IT est un éditeur de logiciel luxembourgeois dédié au développement
							de solutions informatiques pour les sociétés d'assurance vie.
						</p>
						<p class="job-description">
							En tant que salarié en période d'essai, j'ai travaillé sur l'ajout de fontionnalités
							dans une application web en ASP.NET Forms et une application mobile Xamarin (iOS et Android).
						</p>
					</div>
				</div>
			</div>

			<div class="col l4 m6 s12">
				<div class="card large white darken-4 z-depth-2">
					<img src="/assets/img/booku-2.jpg" alt="Evénement de type salon professionnel avec des stands" />
					<div class="card-content">
						<div class="headline">
							<h3 class="center-align card-title">Book'u</h3>
							<h4 class="center-align">Kortrijk, Belgique</h4>
							<h5 class="center-align">Stage en 2017</h5>
						</div>
						<div class="divider"></div>
						<p class="job-description">
							La start-up Book'u conçoit des applications clés en main pour la gestion d'événements tels que des salons/expositions.
							L'outils principal permet de finement gérer les aspects humains, financiers et temporels qu'implique ce type de projet.
						</p>
						<p class="job-description">
							Ce dernier créé avec une architecture spécifiquement orienté vers les ordinateurs de bureau avait besoin d'une version plus légère et
							adapté aux mobiles. Avec d'autres étudiants de l'université VIVES à Courtai, j'ai eu l'opportunité de
							tester les technologies Ionic et AngularJS afin de proposer un prototype répondant à ce besoin.
						</p>
					</div>
				</div>
			</div>

			<div class="col l4 m6 s12">
				<div class="card large white darken-4 z-depth-2">
					<img src="/assets/img/stage-dut.jpg" alt="Bouteilles en verre" />
					<div class="card-content">
						<div class="headline">
							<h3 class="center-align card-title">O-I Manufacturing</h3>
							<h4 class="center-align">Gironcourt-sur-Vraine</h4>
							<h5 class="center-align">Stage en 2016</h5>
						</div>
						<div class="divider"></div>
						<p class="job-description">
							O-I Manufacturing est une entreprise internationale spécialisée
							dans la fabrication d'objets en verre. La filiale de
							Gironcourt-Sur-Vraine est une verrerie du groupe qui recycle des
							bouteilles usagées en nouvelles qui sont destinées aux spiritueux.
						</p>
						<p class="job-description">
							Recruté en tant que stagiaire j'ai conçu une application ASP.NET qui récupère
							les documents présents sur le serveur, les organise dans une base de données puis affiche un site en intranet
							où chaque employé connecté peut rechercher, trier ou filtrer par des catégories les documents qu'il souhaite.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<?php require 'infos.php'; ?>

<?php require 'portfolio.php'; ?>

<?php require 'contact.php'; ?>

<?php require 'footer.php'; ?>