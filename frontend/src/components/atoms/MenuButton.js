import React, { Component } from "react";
import '../../App.css';

export class MenuButton extends Component {
  myFunction(x) {
    x.classList.toggle("change");
}

  render() {
    return (
      <div>
        <div class="buttonContainer" onclick="myFunction(this)"
             onMouseDown={this.props.handleMouseDown}>
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </div>
    );
  }
}

/*
Try to change it..
Change like this..
<button onclick="activateLasers()">
  Activate Lasers
</button>

Into this..
<button onClick={activateLasers}>
  Activate Lasers
</button>
*/
