import React, { Component } from 'react';
import Navbar from './components/Navbar'
import FormField from './components/FormField'
import CoolButton from './components/CoolButton'
import './App.css';


export default class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <FormField />
        <div className="column is-6 section">
          <div className="columns is-mobile is-flex justify-center">
            <CoolButton isSmall isDanger font5 property isRounded>Button 1</CoolButton>
            <CoolButton isSmall isSuccess font5>Button 2</CoolButton>
          </div>
        </div>
      </div>
    );
  }
}