import React, { Component } from 'react'
import Navbar from "./navbar"
import FormField from "./FormField"


class Signup extends Component {

  constructor(props) {
    super(props)
  }



  render() {

    return (

      <div>
        <Navbar logo={this.props.logo} home={this.props.home} login={this.props.login} signup={this.props.signup} />
        <FormField label={this.props.label[0]} type={this.props.type} placeholder={this.props.placeholder[0]} />
        <FormField label={this.props.label[1]} type={this.props.type} placeholder={this.props.placeholder[1]} />
        <button type="submit">Sign Up</button>
      </div>

    )

  }


}


export default Signup