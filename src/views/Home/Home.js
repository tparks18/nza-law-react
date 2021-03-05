import React, {Component} from 'react';
import logo from './sharpened_nza_logo.jpg'
import forest from './forest.jpeg'
import 'bootstrap/dist/css/bootstrap.css';

class Home extends React.Component {
    render() {
        return(
    
            <body>
                <meta charset="UTF-8" />
        <div class="main-box">
            <div class="login-box">
                <p>Login</p>
            </div>
            <div class="logo-wrapper">
                <img src={logo} alt="nza law logo" />
            {/* Navbar */}
            <nav class="navbar">
            <ul>
                <li class="navbar-item"><a href="index.html">
                    <div class="navbar-item-content-first">
                    WHO WE ARE
                    </div>
                </a></li>
                <li class="navbar-item"><a href="what_we_do.html">
                    <div class="navbar-item-content">
                    WHAT WE DO
                    </div>
                </a></li>
                <li class="navbar-item"><a href="#news">
                    <div class="navbar-item-content">
                    NEWS &#38; EVENTS
                </div>
                </a></li>
                <li class="navbar-item"><a href="where_we_work.html">
                    <div class="navbar-item-content">
                    WHERE WE WORK
                    </div>
                </a></li>
                <li class="navbar-item"><a href="contact_us.html">
                    <div class="navbar-item-content">
                    CONTACT US
                </div>
                </a></li>
            </ul>
                        </nav>
                        </div>    
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <div class="main">
                    <div class="container top-portion">
                    <div class="row">
                        <div class="col-9 forest-border">
                        <img class="img-fluid" src={forest} alt="Forest" /> 
                        <div class="image-text">
                        <h4>
                            <u>FORWARD THINKING</u>
                        </h4>
                        </div>
                    </div>
            <div class="col-3">
            <div class="scroll-box-text"> 
                <div class="gradient-style">
                <h6 class="white-underline">NEWS FEED</h6>
                <div class="white-background">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.           
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>      
        <div class="container bottom-text">
        <div class="row">
            <div class="col-9">
            <div>
                <p>
                <b>Welcome to our website!</b>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                </p>
            </div>
            </div>
        <div class="col-3">
          <div>
            <p>
              <b>Bigshot, Zoo, & Adds, P.C.</b>
              <br />
              419 West South Street, Suite 4200
              <br />
              Houston, Texas 35983
              <br />
              555-555-5555 (Phone)
              <br />
              555-555-5555 (Fax)
            </p>
          </div>
        </div>
      </div>
  </div>
        <hr />
    <nav class="footer-navbar">
            <ul>
                <li class="footer-navbar-item"><a href="index.html">
                    <div class="footer-navbar-item-content">
                    WHO WE ARE
                    </div>
                </a>
            </li>
            <span class="footer-span">—</span>
                <li class="footer-navbar-item"><a href="what_we_do.html">
                    <div class="footer-navbar-item-content">
                    WHAT WE DO
                    </div>
                </a>
            </li>
            <span class="footer-span">—</span>
                <li class="footer-navbar-item"><a href="#news">
                    <div class="footer-navbar-item-content">
                        
                    NEWS &#38; EVENTS
                    
                </div>
                </a>
            </li>
            <span class="footer-span">—</span>
                <li class="footer-navbar-item"><a href="where_we_work.html">
                    <div class="footer-navbar-item-content">
                    WHERE WE WORK
                    </div>
                </a>
            </li>
            <span class="footer-span">—</span>
                <li class="footer-navbar-item"><a href="contact_us.html">
                    <div class="footer-navbar-item-content">
                    CONTACT US
                </div>
                </a>
            </li>
            </ul>
        </nav>
        </div>
        </div>
        </body>
        )
    }
}

export default Home