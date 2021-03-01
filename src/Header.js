import React, { Component } from "react";
import "./index.css";
// import minions from "./minon.jpg";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1> CATCH ME IF YOU CAN 😋😉 </h1>
        <p>
          Random number selected between 1 and 100. See if you can guess it in
          10 turns or fewer. You get info if your guess was too high or too low.
        </p>
      </div>
    );
  }
}

export default Header;
