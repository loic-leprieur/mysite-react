import React from 'react'

function getCurrentYear() {
  return new Date().getFullYear().toString()
}

function Footer() {
  return (
    <footer className="page-footer white darken-4">
      <div className="footer-copyright">
        <div className="container black-text">
          <span>©2018-{getCurrentYear()} - Loïc LEPRIEUR</span>
          <p className="black-text">
            Retrouvez tous mes travaux sur<a href="https://github.com/loic-leprieur"> GitHub</a>
          </p>
          <a className="right" href="https://twitter.com/le_lowick">
            Twitter - @le_lowick
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
