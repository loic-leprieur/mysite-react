import React from 'react';

function Infos() {
  return (
    <section id="infos" className="section">
      <h3 className="orange-text">Informations</h3>

      <div id="card-infos" className="card white darken-4 black-text">
        <p>
          Je suis un développeur polyvalent avec 3 ans d&apos;expériences dans le développement web
          backend et frontend. Côté attitute, je suis sérieux mais taquineur, curieux, bon vivant et
          d&apos;un calme Olympien. Je me donne toujours à 100% pour chacune de mes tâches et prend
          un grand plaisir à travailler dans mon domaine : le code, que je considère comme un
          artisanat numérique 🧑🏻‍💻.
        </p>

        <p>
          Au cours de mes expériences professionnelles j&apos;ai eu la chance de travailler dans des
          secteurs très différents : le BTP, la banque et l&apos;assurance vie, l&apos;automobile ou
          encore la médecine nucléaire. Les technologies auxquelles j&apos;ai pu toucher sont :
        </p>
        <div id="skills-container">
          <div className="list-parent-skills">
            <span className="list-title-skill">Langages de programmation / Frameworks :</span>
            <ul>
              <li className="list-li-skill">Java : Hibernate, JPA, GWT</li>
              <li className="list-li-skill">
                C# : ASP.NET MVC / Core, Entity Framework, Devbooster
              </li>
              <li className="list-li-skill">C</li>
              <li className="list-li-skill">Python</li>
              <li className="list-li-skill">JavaScript : React, jQuery, Angular</li>
              <li className="list-li-skill">HTML5</li>
              <li className="list-li-skill">CSS3</li>
            </ul>
          </div>

          <div className="list-parent-skills">
            <span className="list-title-skill">Bases de données :</span>
            <ul>
              <li className="list-li-skill">MySQL</li>
              <li className="list-li-skill">Oracle</li>
              <li className="list-li-skill">SQL Server</li>
            </ul>
          </div>
          <div className="list-parent-skills">
            <span className="list-title-skill">Systèmes et outils :</span>
            <ul>
              <li className="list-li-skill">zsh</li>
              <li className="list-li-skill">Bash</li>
              <li className="list-li-skill">Chrome Web Tools</li>
              <li className="list-li-skill">Eclipse</li>
              <li className="list-li-skill">Visual Studio / Code</li>
              <li className="list-li-skill">Git</li>
              <li className="list-li-skill">Linux</li>
              <li className="list-li-skill">MacOs</li>
              <li className="list-li-skill">IBM z/OS</li>
              <li className="list-li-skill">Chat GPT</li>
            </ul>
          </div>
        </div>

        <p>
          J&apos;apprends vite et je continue de me former à de nouvelles technologies ou
          techniques. En ce moment je me met en place un environement de développement avec des
          conteneurs, je convertis mon site à React et je teste les IA génératives comme Chat GPT
          aussi pour augmenter ma productivité que pour divers projets en Python.
          <br />
          Proactif, force de proposition et autonome j&apos;ai tendance à approcher un projet par
          son achitecture en l&apos;analysant via des diagrammes puis à ajouter ou modifier une
          feature jusqu&apos;à pleinement comprendre la base de code sur le bout des doigts.
        </p>
        <p>
          En dehors du travail et de la programmation je m&apos;intéresse à l&apos;astronomie, je
          fais des lives sur Twitch, je joue à certains jeux sur PC ou sur Switch et je lis des
          livres policiers et fantastiques (The Witcher et les romans d&apos;Agatha Christie&nbsp;
          <span role="img" aria-label="Coeur">
            ❤️
          </span>
          )
        </p>

        <ul className="center-align infos-links">
          <li>
            <a
              className="waves-effect waves-orange btn amber darken-3"
              href="mailto:contact@loic-leprieur.fr?subject=Site web (Infos)">
              contact@loic-leprieur.fr
            </a>
          </li>
          <li>
            <a
              className="waves-effect waves-orange btn amber darken-3"
              href="https://www.linkedin.com/in/loic-leprieur-1705/">
              Linkedin
            </a>
          </li>
          <li>
            <a className="waves-effect waves-orange btn amber darken-3" href="#contact">
              Formulaire de contact
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Infos;
