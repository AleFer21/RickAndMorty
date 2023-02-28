import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {

    const [clicks, setClicks] = useState(0);
    const year = new Date().getFullYear();
    const companyName = "Darío Alejandro Fernández";

    const handleClick = () => {
      setClicks(clicks + 1);
    }

  return (
    <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p class="col-md-4 mb-0 text-muted">&copy; {year} {companyName}</p>
        <span class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none" onClick={handleClick}>
          <img className="App-logo" src="RyMPortal.png" alt="portal" width="100" height="100"/>
          <p class="col-md-4 mb-0 text-muted">Times you crossed the portal {clicks}</p>
        </span>
        <ul class="nav col-md-4 justify-content-end">
          <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Back to Top</a></li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
