import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Formfield from './Formfield.js';
import Navbar from './Navbar.js';

class App extends Component {
  constructor(props){
    // this 'props' is actually the object inherited from the Component imported from 'react' library
    super(props);
    this.state = { 
        input1: {
                label: 'Name',
                type: 'text',
                placeholder: 'e.g Alex Smith',
            },
      input2: {
            label: 'Email',
            type: 'email',
            placeholder: 'e.g. alexsmith@gmail.com',
          },
      displayType: "block",
    }
  }

  clickFunc = () => {
    console.log('button clicked =-=-=-=-=-=')
    if (this.state.displayType === "none") {
      this.setState({
        ...this.state, displayType: "block"
        })
      } else {
        this.setState({
          ...this.state, displayType: "none"
          })
      }
    };

  render() {
    return (
      <div className="App">
        <Navbar onClick={this.clickFunc} />
        <Formfield style={this.state.displayType} label={this.state.input1.label} type={this.state.input1.text} placeholder={this.state.input1.placeholder}  />
        <Formfield style={this.state.displayType} label={this.state.input2.label} type={this.state.input2.text} placeholder={this.state.input2.placeholder}  />
      </div>
    );
  }
}

export default App;
