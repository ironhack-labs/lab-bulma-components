import React, { Component } from "react";
import FormField from './FormField'
import CoolButton from "./CoolButton";
import Message from './Message';

class Signup extends Component {

  state = {
    showMessage: false
  }

  handleTogkeClick = () =>{
    this.setState({
      showMessage: true
    })
  }

  closeMsg = ()  => {
    this.setState({
      showMessage: false
    })
  }
  render() {
    if(this.props.show){
      return null;
    }
    return (
      <div>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField label="Password" type="text" placeholder="*******" />
        <CoolButton isSmall isSuccess 
        click={this.handleTogkeClick}>
        Sign up
        </CoolButton>
        <Message show={this.state.showMessage} closeMessage={this.closeMsg}/>
      </div>
    );
  }
}

export default Signup;