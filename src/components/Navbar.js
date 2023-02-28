import React from 'react'

const Navbar = () => {
  return (
    <header>
      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
            <h4 class="text-white">About</h4>
            <p class="text-white">This single app page was developed by Darío Alejandro Fernández</p>
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
              <h4 className="text-white">Contact</h4>
              <ul className="list-unstyled">
                <li><a href="https://twitter.com/winyfernandez" className="text-white" target={'_blank'} rel="noreferrer">Follow on Twitter</a></li>
                <li><a href="https://www.instagram.com/winyfernandez21/" className="text-white" target={'_blank'} rel="noreferrer">Follow on Instagram</a></li>
                <li><a href="https://github.com/AleFer21" className="text-white" target={'_blank'} rel="noreferrer">Check my GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/dalefer21/" className="text-white" target={'_blank'} rel="noreferrer">Add me on LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
          <img src="RyMNavbar.png" alt="logo" width="50" height="50" className="rounded-circle"/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
