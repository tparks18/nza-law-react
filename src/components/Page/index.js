import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../Footer"


export default class Page extends Component {
  render() {
    const children = this.props.children;

    return (
      <div>
        <div className="main-box">
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    );
  }
}
