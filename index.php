<?php require 'header.php';?>

<div class="parallax-container row valign-wrapper">
	<div id="container-profile" class="container center-align valign-wrapper">
		<div class="row">
			<div class="col s12 m5 l4 center-align">
				<img id="profile-img" src="\assets\img\profil.jpg"></img>
			</div>
			<div class="col s12 m7 l8 center-align white-text lignten-3-text">
				<h4 id="title-job">Analyste&nbsp;développeur 
					<?php $now = date_create();

						$anniv = date_create("1996-05-17 00:00:00");
						echo $anniv->diff($now)->format("%y ans");
					?>
					</h4>
				<h4 id="profile-text" class="text-justify">
					Passionné par les nouvelles technologies et l'apport au quotidien de chacun.
				</h4>
				<div class="waves-effect btn-large hoverable amber darken-4">
					<a href="mailto:contact@loic-leprieur.fr?subject=Site web (Accueil)" class="white-text valign-wrapper">
						<i class="medium material-icons">mail_outline</i>&nbsp;<span class="center-align">Email</span>
					</a>
				</div>
			</div>

		</div>
	</div>
	<div class="parallax">
		<img id="parallax-img1" src="\assets\img\programing-photo-1.png" alt="Photo d'un clavier" style="min-height:1000px;">
	</div>
</div>

<!-- Content -->
<div class="section grey darken-4">
	<div class="carousel carousel-slider center">
		<div id="carousel-item-dueti" class="carousel-item">
			<div id="carousel-background-dueti" class="carousel-background"></div>
			<div class="carousel-content">
				<div class="headline">
					<h4 class="center-align">DUETI (Erasmus)</h4>
					<h4 class="center-align">2016-2017</h4>
				</div>
				<p class="white-text lignten-3-text">
					Séjour Erasmus+ en Belgique : perfectionnement à l'Anglais
					technique et conversationnel. Approfondissement de mes
					connaissances en développement web avec ASP.NET et Java EE et en
					développement mobile avec iOS (Swift) et Android (Java). Travaux
					individuels avec évaluation du tuteur et un projet de fin de
					semestre en groupe.
				</p>
			</div>
		</div>
		<div id="carousel-item-dut" class="carousel-item">
			<div id="carousel-background-dut" class="carousel-background"></div>
			<div class="carousel-content">
				<div class="headline">
					<h4 class="center-align">DUT Informatique</h4>
					<h4 class="center-align">2014-2016</h4>
				</div>
				<p class="white-text lignten-3-text">
					Curriculum : Algorithmie, programmation orientée objets,
					orientée machine, web, administration de systèmes Linux, création
					d'interfaces homme-machine, conception et gestion de bases de
					données relationnelles, comptabilité, économie et gestion de
					projets.
				</p>
			</div>
		</div>
	</div>
</div>

<div class="parallax-container">
	<div class="parallax">
		<img src="\assets\img\brugges-erasmus.jpg" alt="Atomium de Bruxelles">
	</div>
</div>

<div class="section white darken-4">
	<div class="row">
		<div class="col l4 m6 s12">
			<div id="card-background-lfaid" class="card large white darken-4 z-depth-2">
				<div class="card-content" style="overflow:scroll;">
					<div class="headline">
						<h4 class="center-align card-title">La Fabrik à ID</h4>
						<h5 class="center-align">Bischeim</h5>
						<h5 class="center-align">Janvier 2022</h5>
					</div>
					
					<div class="divider"></div>
					<p>
						La start-up <strong>La Fabrik à ID</strong> travaille avec les concessionnaires automobile notamment Mercedes
						pour la digitalisation du parcours client avec des scanners de plaques et un CRM intégré.
					</p>
					<p>
						Bien que court, mon passage m'a permis de cerner les enjeux techniques et fonctionnels des solutions proposées et j'ai pu participer
						à la mise en place du nouveau CRM en intégrant les composants de création de compte de vendeurs, la gestion des utilisateurs ou encore la création et la gestion d'équipes. 
					</p>
				</div>
			</div>
		</div>
		<div class="col l4 m6 s12">
			<div id="card-background-eid" class="card large white darken-4 z-depth-2">
				<div class="card-content" style="overflow:scroll;">
					<div class="headline">
						<h4 class="center-align card-title">SII Est Strasbourg / Euro-Information Développement</h4>
						<h5 class="center-align">Strasbourg</h5>
						<h5 class="center-align">CDI de juillet 2021 à novembre 2021</h5>
					</div>
					
					<div class="divider"></div>
					<p>
						Euro-Information Développement est la filiale technologique du groupe Crédit Mutuel-CIC. 
					</p>
					<p>
						J'ai rejoint la partie monétique - recouvrement commerçant afin d'améliorer et de maintenir les applications
						intranet en C# / ASP.NET (framework Devbooster) dont des solutions pour l'historisation des cartes et des transactions et le suspens / annulation des remises.
					</p>
				</div>
			</div>
		</div>
		<div class="col l4 m6 s12">
			<div id="card-background-kp1" class="card large white darken-4 z-depth-2">
				<div class="card-content" style="overflow:scroll;">
					<div class="headline">
						<h4 class="center-align card-title">2S2I Solutions / KP1</h4>
						<h5 class="center-align">Chaumont</h5>
						<h5 class="center-align">CDI de janvier 2020 à avril 2021</h5>
					</div>
					
					<div class="divider"></div>
					<p>
						KP1 est une société incontournable du bâtiment en France.
						Elle est spécialisée dans le béton pré-contrainte et conçoit ses propres logiciels 
						de CAO en 2D/3D pour élaborer des produits en BIM.
					</p>
					<p>
						Chargé de reprendre le développement d'un outils de dessin essentiel pour les bureaux d'études,
						je monte en compétences et je propose des solutions afin de l'améliorer.
					</p>
				</div>
			</div>
		</div>

		<div class="col l4 m6 s12">
			<div id="card-background-switch" class="card large white darken-4 z-depth-2">
				<div class="card-content" style="overflow:scroll;">
				<div class="headline">
					<h4 class="center-align card-title">Switch IT</h4>
					<h5 class="center-align">Leudelange, Luxembourg</h5>
					<h5 class="center-align">CDI en 2017</h5>
				</div>
				
					<div class="divider"></div>
					<p>
						Switch IT est un éditeur de logiciel luxembourgeois dédié au développement 
						de solutions informatiques pour les sociétés d'assurance vie.
					</p>
					<p>
						En tant que salarié en période d'essai, j'ai travaillé sur l'ajout de fontionnalités
						dans une application web en ASP.NET Forms et une application mobile Xamarin (iOS et Android).
					</p>
				</div>
			</div>
		</div>

		<div class="col l4 m6 s12">
			<div id="card-background-booku" class="card large white darken-4 z-depth-2">
				<div class="card-content" style="overflow:scroll;">
					<div class="headline">
						<h4 class="center-align card-title">Book'u</h4>
						<h5 class="center-align">Kortrijk, Belgique</h5>
						<h5 class="center-align">Stage en 2017</h5>
					</div>
					<div class="divider"></div>
					<p>
						La start-up Book'u conçoit des applications clés en main pour la gestion d'événements tels que des salons/expositions.
						L'outils principal permet de finement gérer les aspects humains, financiers et temporels qu'implique ce type de projet.
					</p>
					<p>
						Ce dernier créé avec une architecture spécifiquement orienté vers les ordinateurs de bureau avait besoin d'une version plus légère et 
						adapté aux mobiles. Avec d'autres étudiants de l'université VIVES à Courtai, j'ai eu l'opportunité de
						tester les technologies Ionic et AngularJS afin de proposer un prototype répondant à ce besoin.
					</p>
				</div>
			</div>
		</div>

		<div class="col l4 m6 s12">
			<div id="card-background-oi" class="card large white darken-4 z-depth-2">
				<div class="card-content" style="overflow:scroll;">
					<div class="headline">
						<h4 class="center-align card-title">O-I Manufacturing</h4>
						<h5 class="center-align">Gironcourt-sur-Vraine</h5>
						<h5 class="center-align">Stage en 2016</h5>
					</div>
					<div class="divider"></div>
					<p>
						O-I Manufacturing est une entreprise internationale spécialisée
						dans la fabrication d'objets en verre. La filiale de
						Gironcourt-Sur-Vraine est une verrerie du groupe qui recycle des 
						bouteilles usagées en nouvelles qui sont destinées aux spiritueux.
					</p>
					<p>
						Recruté en tant que stagiaire j'ai conçu une application ASP.NET qui récupère
						les documents présents sur le serveur, les organise dans une base de données puis affiche un site en intranet
						où chaque employé connecté peut rechercher, trier ou filtrer par des catégories les documents qu'il souhaite.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<?php require 'footer.php';?>