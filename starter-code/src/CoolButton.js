import React, { Component } from "react";
import "bulma/css/bulma.css";

class CoolButton extends Component {
  render() {
    console.log(this.props);

    var button = "button";
    const { isSmall, isDanger, isSuccess, className } = this.props;
    return (
      <div>
        <button className={this.props}>Button 1</button>
        {/* <button className={button + { isSmall } + { isSuccess }}>
          Button 2
        </button> */}
      </div>
    );
  }
}

export default CoolButton;
