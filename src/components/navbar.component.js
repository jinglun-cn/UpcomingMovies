import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">UpcomingMovies</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Movies</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Add Movie Entry</Link>
          </li>
          <li className="navbar-item">
          <Link to="/theater" className="nav-link">Add Theater</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
