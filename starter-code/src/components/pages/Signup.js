import React, {Component} from 'react'

// Components 
import Navbar from '../Navbar'
import Form from '../Form'
import CoolButton from '../CoolButton'

export default class SignUp extends Component{

  render(){
    return (
      <div>
        <Navbar/>
        <Form/>
        <CoolButton/>
      </div>
    );
  }

}