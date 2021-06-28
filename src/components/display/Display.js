import React, { Component } from "react";
import "./Display.css";

export class Display extends Component {
  render() {
    return (
      <div className="display-wrapper">
        <div className="image1-div">
          <img className="img-1" src={"../../downloads/img1.jpeg"} alt="nature" />
        </div>
      </div>
    );
  }
}

export default Display;
