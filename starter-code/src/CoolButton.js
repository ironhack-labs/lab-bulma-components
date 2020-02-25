import React, { Component } from "react";

class CoolButton extends Component {
  render(props) {
    return (
    
<button className={this.props.className}>{this.props.children}</button>


    );
}
}

export default CoolButton;