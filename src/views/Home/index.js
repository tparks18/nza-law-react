import React, {Component} from 'react';
import logo from './sharpened_nza_logo.jpg'
import forest from './forest.jpeg'
import 'bootstrap/dist/css/bootstrap.css';

export default class Home extends Component {
    render() {
        return(
            <div>
            <body>
                <meta charset="UTF-8" />
        <div className="main-box">
            <div className="login-box">
                <p>Login</p>
            </div>
            <div className="logo-wrapper">
                <img src={logo} alt="nza law logo" />
                        </div>    
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <div className="main">
                    <div className="container top-portion">
                    <div className="row">
                        <div className="col-9 forest-border">
                        <img className="img-fluid" src={forest} alt="Forest" /> 
                        <div className="image-text">
                        <h4>
                            <u>FORWARD THINKING</u>
                        </h4>
                        </div>
                    </div>
            <div className="col-3">
            <div className="scroll-box-text"> 
                <div className="gradient-style">
                <h6 className="white-underline">NEWS FEED</h6>
                <div className="white-background">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.           
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>      
        <div className="container bottom-text">
        <div className="row">
            <div className="col-9">
            <div>
                <p>
                <b>Welcome to our website!</b>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                </p>
            </div>
            </div>
        <div className="col-3">
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
        </div>
        </div>
        </body>
        </div>
        )
    }
}