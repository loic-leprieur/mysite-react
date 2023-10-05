import React from 'react'
import imageServerError from '../assets/img/500.png'

const ServerError = () => {
  return (
    <div className="errorDiv black-text">
      <h1>Erreur 500 - Internal server error</h1>
      <img className="imageError" src={imageServerError} alt="Erreur 500" loading="lazy" />
      <p>Désolé, votre requête n'a pas pu être traitée par le serveur</p>
    </div>
  )
}

export default ServerError
