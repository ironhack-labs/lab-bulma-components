import React, { Component } from "react";

class CoolButton extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
      const { className } = this.props;
        return (
          <React.Fragment>
            <button class={className}>Submit</button>
          </React.Fragment>
        )
    }
}

export default CoolButton;