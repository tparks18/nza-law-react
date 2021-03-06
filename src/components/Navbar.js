import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
<nav className="navbar">
            <ul>
                <li className="navbar-item"><Link to="/">
                    <div className="navbar-item-content-first">
                    WHO WE ARE
                    </div>
                </Link></li>
                <li className="navbar-item"><Link to="whatwedo">
                    <div className="navbar-item-content">
                    WHAT WE DO
                    </div>
                </Link></li>
                <li className="navbar-item"><Link to="/">
                    <div className="navbar-item-content">
                    NEWS &#38; EVENTS
                </div>
                </Link></li>
                <li className="navbar-item"><Link to="wherewework">
                    <div className="navbar-item-content">
                    WHERE WE WORK
                    </div>
                </Link></li>
                <li className="navbar-item"><Link to="/contact">
                    <div className="navbar-item-content">
                    CONTACT US
                </div>
                </Link></li>
            </ul>
                        </nav>
        )
    }
}