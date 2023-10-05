// NotFound.js
import React from 'react'
import image404 from '../assets/img/404.png'

const NotFound = () => {
  return (
    <div className="errorDiv black-text">
      <h1>Erreur 404 - Page non trouvée</h1>
      <img className="imageError" src={image404} alt="Erreur 404" loading="lazy" />
      <p>Désolé, la page que vous recherchez n'existe pas.</p>
    </div>
  )
}

export default NotFound
