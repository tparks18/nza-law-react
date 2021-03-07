import React, { Component } from "react";
import Navbar from "../../components/Navbar";
// import "bootstrap/dist/css/bootstrap.css";

export default class Page extends Component {
  render() {
    const children = this.props.children;

    return (
      <div>
          
          <div className="main-box">

            <Navbar />
            {children}
          </div>
      </div>
    );
  }
}
