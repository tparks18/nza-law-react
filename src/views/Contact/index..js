import React, {Component} from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './sharpened_nza_logo.jpg'
import stackedNewspapers from './unsplash-newspaper-stack.png'
import telephoneBanner from './telephone-banner-2.jpg'
import map from './unsplash-map.png'
import groupOfLawyers from './group-of-lawyers.png'

export default class Contact extends Component {
    render() {
        return(
            <div>
        <body>
        <div class="main-contact-us-box">
            <div class="login-box">
                <p>Login</p>
            </div>
        <div class="logo-wrapper">
            <img src={logo} alt="NZA Law Logo" />
        
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
                    <img class="stacked-newspapers" src={stackedNewspapers} width="238" height="143" alt="stacked newspapers" />
                </div>
                    <strong>
                        
                    <a href="index.html">News &#38; Events</a>
                    </strong>
                        <p> Join our magnificant firm and do more stuff with us.</p>
        </div>
    </div>

  <div class="telephone-pic">
      <img class="telephone" src={telephoneBanner} alt="telephone contact"/>
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
            <img src={map} width="238" height="112" alt="grey map with red markers" />
            <strong>Where We Work</strong>
            <p>Find out more about our work coverage area</p>
            <div class="group-pic">
            <img src={groupOfLawyers} width ="238" height="112" alt="diverse group of lawyers" />
            </div>
            <strong>News &#38; Events</strong>
            <p> Join our magnificant firm and do more stuff with us.</p>
        </div>
    </div>
</div>
</div>
</div>
</div>
        <hr />
    </body>
    </div>
        )
    }
}