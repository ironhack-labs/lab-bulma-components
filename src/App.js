import React from 'react'
import './App.css';

Components
import Navbar from './navbar/Navbar'
import FormField from './formfield/FormField'

import SignUp from './components/signup/SignUp'
import Container from './components/container/Container'

const App = () => {
  return (
    <main>
      
    <header><Navbar></Navbar></header>    

    <section>
        <form class="is-centered">
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        </form>       
    </section>

    <section class="frame">
      <SignUp></SignUp>
      <br/>
      <aside><Container /></aside>
    </section>
      
    </main> 
  )
}

export default App;
