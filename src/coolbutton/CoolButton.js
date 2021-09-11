import React from "react";
import "bulma/css/bulma.css";
import "./CoolButton.css";

class CoolButton extends React.Component {
    render() {
        return (
          <div className="btn">
            <button class="button is-rounded my-class is-danger is-small">
              Button 1
            </button>
            <button class="button is-small is-success">Button 2</button>
          </div>
        );
    }
}

export default CoolButton
