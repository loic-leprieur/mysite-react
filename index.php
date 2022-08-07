<?php require 'header.php'; ?>

<section id="accueil" class="section">
	<div class="parallax-container row valign-wrapper">
		<div class="container-profile container center-align valign-wrapper">
			<div class="row" id="banner-profile" style="opacity: 0;">
				<div class="col s12 m5 l4 center-align">
					<img id="profile-img" src="\assets\img\profil.jpg" alt="Portrait de Loïc"></img>
				</div>
				<div id="profile-body" class="col s12 m7 l8 center-align white-text lignten-3-text">
					<h1 id="title-job">Loïc,
						<?php $now = date_create();

						$anniv = date_create("1996-05-17 00:00:00");
						echo $anniv->diff($now)->format("%y ans");
						?>, Analyste&nbsp;développeur

					</h1>
					<h2 class="S12" id="profile-text" class="text-justify">
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
</section>

<?php require 'formation.php' ?>


<div class="parallax-container" style="display: flex; justify-content: center; align-items: center;">
	<div class="container-profile container center-align valign-wrapper">
		<h4>Understanding and practicing English is a key factor in any modern profesional context.<br /><br />My Erasmus stay helped me to bring my language level to another dimension.</h4>
	</div>
	<div class="parallax">

		<img src="\assets\img\brugges-erasmus.jpg" alt="Atomium de Bruxelles">

	</div>
</div>


<?php require 'experiences.php'; ?>

<?php require 'infos.php'; ?>

<?php require 'portfolio.php'; ?>

<?php require 'contact.php'; ?>

<?php require 'footer.php'; ?>