import React, { Component } from 'react'
import './App.css';
import Nav from './components/Nav';
import Formfield from './components/Formfield';
import Coolbutton from './components/Coolbutton';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      userOne:{
        name: 'Rick Sanchez'
      },
      userTwo:{
        name: 'Morty Smith'
      }
    };
  }

  render(){
    return (
      <div className="App">
        <Nav/>
        <Formfield label={this.state.userOne.name} placeholder={this.state.userOne.name} />
        <Formfield label={this.state.userTwo.name} placeholder={this.state.userTwo.name} />
        <Coolbutton isSmall='is-small' isDanger='is-danger' isRounded='is-rounded'>Button-1</Coolbutton>
        <Coolbutton isSmall='is-small' isSuccess='is-success' >Button-2</Coolbutton>
      </div>
    );
  }

}
