import React from 'react';
import logo from '../logo.png'

const Nav = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
  <a className="navbar-brand" href="#"><img src={logo} alt="LOGO"></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" href="#">About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">My Work</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Resume</a>
      </li>
    </ul>
  </div>
</nav>
  );
};

export default Nav;