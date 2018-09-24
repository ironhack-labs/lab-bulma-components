import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import CoolButton from './CoolButton';
import Formfield from './Formfield';
import Navbar from './Navbar'

class Signup extends Component{
  constructor(props) {
    super(props);
    this.state = {isHidden: true}
  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render () {
    return (
      <div>
        <button className="button is-primary" onClick={this.toggleHidden.bind(this)} >
          Click to Show Form!
        </button>
        {!this.state.isHidden && <Child />}
      </div>
    )
  }
}

const Child = () => (

      <div>
      <form>

      <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
      <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> 
      <Formfield label="Password" type="password" placeholder="e.g. 1234" />
      <CoolButton class="button is-small is-success">Submit!</CoolButton>

      </form>
      </div>
)




export default Signup