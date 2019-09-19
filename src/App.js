import React, { Component } from 'react'
import './App.css'
import Nav from './components/Nav'
import FormField from './components/FormField'
import CoolButton from './components/CoolButton'
import Signup from './components/Signup'
import Message from './components/Message'

export default class App extends Component {

  render () {
    return (
      <div className='App'>

        <Nav />
        <div className='container section'>
          <FormField type='text' label='What is your name?' placeholder='your name here'/>
          <FormField type='text' label='What is your email?' placeholder='your email here' />
          <CoolButton className='is-small is-danger is-rounded'>Button-1</CoolButton>
        </div>

        <div className='container section'>
          <Message />
        </div>

        <div className='container section'>
          <Nav />
          <Signup />
        </div>

      </div>
    )
  }
}
