import React, { Component } from "react";
import pozadina from "./pozadina/pozadina.png";

class Background extends Component {
  render() {
    const myStyle = {
      backgroundImage: `url(${pozadina})`,
      height: "100vh",
      marginTop: "-0px",
      fontSize: "50px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
    return (
      <div style={myStyle}>
        <header className="header">
          <h1>Welcome!</h1>
        </header>
        <footer className="footer">@Mihael</footer>
      </div>
    );
  }
}

export default Background;
