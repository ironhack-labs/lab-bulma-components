import React, { Component } from 'react';

import './App.css';


import Signup from './signup'

import Message from './message'
// import Divs   from './divs'

class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      class : "standart",
      style: {color:'blue'}
    }
  }

  changeStyle = () => {
    console.log('click');

    this.setState({
      style: {color:'green'}
    })
  }

  render() {
    return (
      <div className="App">
      

      <Signup />
   
      <Message changeStyle={this.changeStyle} style={this.state.style} title="hello world"> 
          ahahahhaha
       </Message>
     
      
      </div>
    );
  }
}

export default App;
