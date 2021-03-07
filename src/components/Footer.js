import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <nav className="footer-navbar">
        <ul>
          <li className="footer-navbar-item">
            <Link to="/">
              <div className="footer-navbar-item-content">WHO WE ARE</div>
            </Link>
          </li>
          <span className="footer-span">—</span>
          <li className="footer-navbar-item">
            <Link to="/">
              <div className="footer-navbar-item-content">WHAT WE DO</div>
            </Link>
          </li>
          <span className="footer-span">—</span>
          <li className="footer-navbar-item">
            <Link to="/">
              <div className="footer-navbar-item-content">
                NEWS &#38; EVENTS
              </div>
            </Link>
          </li>
          <span className="footer-span">—</span>
          <li className="footer-navbar-item">
            <Link to="/">
              <div className="footer-navbar-item-content">WHERE WE WORK</div>
            </Link>
          </li>
          <span className="footer-span">—</span>
          <li className="footer-navbar-item">
            <Link to="/Contact">
              <div className="footer-navbar-item-content">CONTACT US</div>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
