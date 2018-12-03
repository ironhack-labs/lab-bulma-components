import React from "react";

export default class Button extends React.Component {
  render() {
    return (
      <div className="CoolButton">
              <button className="button is-rounded my-class is-danger is-small">
               {this.props.children}
        </button>
       </div>

      
    );
  }
}

