import React, { Component } from 'react';
import './App.css'
import Navbar from './Navbar'
import FormField from './FormField.js'
import CoolButton from './CoolButton'

class Signup extends Component{
  constructor(props){
    super(props)
    this.state = {
      isHidden : true
    }
  }
  toggleHidden (){
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render(){
    return(
      <div>
         <button CoolButton class="button is-danger" buttonName="Log In" onClick={this.toggleHidden.bind(this)} >
           Show Form!
         </button>
         {!this.state.isHidden && <Child />}
       </div>


    )
  }
}

const Child = () => (

  <div>
    <form>

      <FormField label="Name" type="text" placeholder="Alex Rojas"   />
      <FormField label="Email" type="email" placeholder="Alex@gmail.com"   />
      <FormField label="Password" type="password" placeholder="*******"   />

    </form>

  </div>
)




export default Signup
