import React, { Component } from "react";
import 'bulma/css/bulma.css';
import Formfield from "./Formfield"



class Signup extends Component {


  render() {


    return (
      <div>
        <Formfield userInfo={this.props.userInfo} />
      </div>
    );
  }
}

export default Signup;