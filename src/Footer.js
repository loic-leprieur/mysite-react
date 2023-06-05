import React from 'react'

function Footer() {
  return (
    <footer className="page-footer white darken-4">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="black-text">Site web de Loïc LEPRIEUR</h5>
            <p className="black-text">
              Retrouvez tous mes travaux sur<a href="https://github.com/loic-leprieur"> GitHub</a>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container black-text">
          <span>©2018-2022 - Loïc LEPRIEUR</span>
          <a className="right" href="https://twitter.com/le_lowick">
            Twitter - @le_lowick
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
