import React, {Component} from 'react'

import Nav from '../components/Navbar'
import Formfield from '../components/Formfield'
import CoolButton from '../components/Coolbutton'
import SignUp from '../components/Signup'
import Message from '../components/Message'

class App extends Component {

  render () {
    return (
      <main>
        <Nav />
        <Formfield label="Name" mauricio="text" placeholder="e.g Alex Smith"/>
        <Formfield label="Email" mauricio="email" placeholder="e.g. alexsmith@gmail.com"/>
        <CoolButton isDanger text="Button1" />
        <CoolButton text="Button 2"/>
        <SignUp />
        <Message class="message is-link" title="Bundaba" message= "Lorem Ipsum BlaBlaBlaBlaBlaBlaBla"/>
      </main>
    )
  }

}

export default App

