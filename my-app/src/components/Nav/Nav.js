import React from 'react';
// import { Link } from "react-router-dom";

export function Nav({ currentCategory }) {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={require("../../assets/images/logo-white-on-black-no-border.png")} alt="B and E logo" />
        </a>
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="navbar-collapse collapse justify-content-center" id="navbarColor01">
          <ul className="navbar-nav">
            <li className="nav-item display-6">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item display-6">
              <a className="nav-link" href="/artist">Artist</a>
            </li>
            <li className="nav-item display-6">
              <a className="nav-link" href="/booking">Booking</a>
            </li>
            <li className="nav-item display-6">
              <a className="nav-link" href="/projects">Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// not sure where I land on this yet, but currently gonna try just named exports
// update: lots of anti export default online, sticking with named for now
// export default Nav;