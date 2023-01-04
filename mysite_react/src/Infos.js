import React from "react";

function Infos(){
    return (
        <section id="infos" className="section">
            <h3 className="orange-text">Informations</h3>

            <div id="card-infos" className="card white darken-4 black-text">
                <p>
                    Je suis certes un développeur junior (~ 2 ans) mais curieux et intéressé par les
                    nouvelles technologies, je suis toujours dédié à 100% à ma tâche et
                    je suis une personne passionné qui prend plaisir à travailler dans son domaine.
                </p>

                <p>
                    Au cours de mes expériences professionnelles j'ai eu la chance de travailler dans
                    des secteurs et des environements techniques variés du BTP à l'assurance vie et du Java SE client lourd pour des plans au CRM en ASP.NET Core.
                </p>

                <p>
                    J'apprends vite et je continue de me former à de nouvelles technolgies ou techniques.
                    <br />
                    Proactif, force de proposition et autonome j'ai tendance à approcher un projet par son
                    achitecture en l'analysant via des diagrammes puis à ajouter ou modifier une feature jusqu'à pleinement comprendre la base de code sur le bout des doigts.
                </p>
                <p>En dehors du travail et de la programmation je m'intéresse à l'astronomie, je fais des lives
                    sur Twitch en tant que streamer et je lis beaucoup de livres policier et fantastiques
                    (The Witcher et les romans d'Agatha Christie <span role="img" aria-label="Coeur">❤️</span>)
                </p>

                <p className="center-align">
                    A la recherche d'un nouvel emploi, je suis disponible immédiatement pour
                    une nouvelle opportunité qui saura m'apporter expériences et relations enrichissantes.
                    <br />💼 Je recherche un poste de <strong>développeur web backend ou fullstack en ASP.NET ou PHP</strong> 💼.
                </p>
                
                <ul className="center-align infos-links">
                    <li><a className="waves-effect waves-light btn amber darken-3" href="mailto:contact@loic-leprieur.fr?subject=Site web (Infos)">contact@loic-leprieur.fr</a></li>
                    <li><a className="waves-effect waves-light btn amber darken-3" href="https://www.linkedin.com/in/loic-leprieur-1705/">Linkedin</a></li>
                    <li><a className="waves-effect waves-light btn amber darken-3" href="#contact">Formulaire de contact</a></li>
                </ul>
            </div>
      </section>
    );
}

export default Infos;