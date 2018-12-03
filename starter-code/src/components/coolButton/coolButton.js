import React from "react";


class CoolButton extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
          <div> 
          
          <button className="button is-rounded my-class is-danger is-small">Login</button>
          <button className="button is-small is-success">Signup</button>
        </div>
        );
    }
}

export default CoolButton;