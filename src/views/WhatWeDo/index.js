import React, { Component } from "react";
// import './App.css';
// import "bootstrap/dist/css/bootstrap.css";
import logo from "./sharpened_nza_logo.jpg";
import leatherChairs from "./leather_chairs.jpeg";
import subrogation from "./subrogation.jpeg";
import litigation from "./litigation.jpeg";
import transportation from "./transportation.jpeg";
import business from "./business.jpeg";

export default class WhatWeDo extends Component {
  render() {
    return (
      <div>
        <body>
          <div className="main-box">
            <div className="login-box">
              <p>Login</p>
            </div>
            <div className="logo-wrapper">
              <img src={logo} alt="NZA Law Logo" />
              <br />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <main>
              <br />

              <div className="container">
                <div className="row">
                  <div className="col-3 gradient-style white-background">
                    <h6 className="white-underline">WHAT WE DO</h6>

                    <ul className="list-bullet-removed">
                      <li>
                        Subrogation
                        <ul className="list-bullet-removed">
                          <li>Property</li>
                          <li>Workers' Comp</li>
                        </ul>
                      </li>
                      <li>
                        Litigation
                        <ul className="list-bullet-removed">
                          <li>Appeliate</li>
                          <li>Commercial</li>
                          <li>Defense</li>
                          <li>Labor/Employment</li>
                        </ul>
                      </li>

                      <li>
                        Business
                        <ul className="list-bullet-removed">
                          <li>Brokerage Agreement</li>
                          <li>Business Formation</li>
                          <li>Business Related</li>
                          <li>Contracts</li>
                          <li>Propery</li>
                          <li>Labor/Employment</li>
                        </ul>
                      </li>

                      <li>
                        Transportation
                        <ul className="list-bullet-removed">
                          <li>Brokerage Agreement</li>
                          <li>Business Formation</li>
                        </ul>
                      </li>
                    </ul>

                    <img
                      class="img-fluid leather-chair-border"
                      src={leatherChairs}
                      alt="Leather Chairs"
                    />

                    <p>
                      <b>Attorneys</b>
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                  </div>

                  <div className="col-9">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>

                    <div className="row">
                      <div className="col-6">
                        <img
                          class="large-pic-border"
                          src={subrogation}
                          alt="Subrogation"
                          width="400"
                          height="250"
                        />
                        <div className="text-in-image">
                          <h3>SUBROGATION</h3>
                        </div>
                      </div>

                      <div className="col-6">
                        <img
                          class="large-pic-border"
                          src={litigation}
                          alt="Litigation"
                          width="400"
                          height="250"
                        />
                        <div className="text-in-image">
                          <h3>LITIGATION</h3>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-6">
                        <img
                          class="large-pic-border"
                          src={business}
                          alt="Business"
                          width="400"
                          height="250"
                        />
                        <div className="text-in-image">
                          <h3>BUSINESS</h3>
                        </div>
                      </div>

                      <div className="col-6">
                        <img
                          class="large-pic-border"
                          src={transportation}
                          alt="Transportation"
                          width="400"
                          height="250"
                        />
                        <div className="text-in-image">
                          <h3>TRANSPORTATION</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            <hr />

            {/* footer */}
          </div>
        </body>
      </div>
    );
  }
}
