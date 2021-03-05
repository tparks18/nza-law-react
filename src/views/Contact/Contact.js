import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class Contact extends React.Component {
    render() {
        return(
    
        <body>
        <div class="main-contact-us-box">
            <div class="login-box">
                <p>Login</p>
            </div>
        <div class="logo-wrapper">
            <img src="images_for_contact_page/sharpened_nza_logo.jpg" alt="NZA Law Logo" />
        {/* Navar */}
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
        
     {/* <!-- Contact Us Container -->        */}
<div class="grid-container">
  <div class="left-sidebar">
    <div class="left-sidebar-content">
        <h4>Contact Us</h4>
                <p>
                    <a href="index.html">Directions/Parking</a>
                </p>
                <p>
                    <a href="index.html">Career Opportunities</a>
                    </p>
                    <div class="left-sidebar-img-container">
                    <img src="images_for_contact_page/unsplash-newspaper-stack.png" width="238" height="143" alt="stacked newspapers" />
                </div>
                    <strong>
                    <a href="index.html">News &#38 Events</a>
                    </strong>
                        <p> Join our magnificant firm and do more stuff with us.</p>
        </div>
    </div>

  <div class="telephone-pic">
      <img src="images_for_contact_page/telephone-banner-2.jpg" width="542" height ="148" alt="telephone contact"/>
  </div>
    
  <div class="contact-text">

    <p>The office hours are 8am - 5pm Monday through Friday
        <br /> 
        <br />689 East South Street
        <br />Suit 4210
        <br />Houston, Texas 09324
        <br />
        <br /> PH: 555.555.5555
        <br />
        <br /> FAX: 555.555.5555
        <br />
        <br /> Contact Rosemary Sage at <a href="index.html">rosemary@lawfirm.com</a>
        <br />
        <br />
        
    </p>
</div>
  <div class="right-sidebar">
    <div class="right-sidebar-content">
        <div class="map-pic">
            <img src="images_for_contact_page/unsplash-map.png" width="238" height="112" alt="grey map with red markers" />
            <strong>Where We Work</strong>
            <p>Find out more about our work coverage area</p>
            <div class="group-pic">
            <img src="images_for_contact_page/group-of-lawyers.png" width ="238" height="112" alt="diverse group of lawyers" />
            </div>
            <strong>News &#38; Events</strong>
            <p> Join our magnificant firm and do more stuff with us.</p>
        </div>
    </div>
</div>
</div>
 
  
                
        {/* <!-- Footer --> */}

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
   
  </body>
        )
    }
}

export default Contact