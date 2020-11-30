import React from 'react'

import 'bulma/css/bulma.css'

//Components
import Navbar from './components/Navbar'
import FormField from './components/FormField'
import CoolButton from './components/CoolButton'
import Signup from './components/signup'

const App = () => {
  return (
    <main> 
      <header>
        <Navbar nav="Navbar here" />
      </header>
      <section className="first-form">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </section>
      
      <section className="buttons">
        <CoolButton className="button is-rounded my-class is-danger is-small" name="Button 1"/>
        <CoolButton className="button is-small is-success" name="Button 2"/>
      </section>

      <section className="signup">
        <Signup />
      </section>
    </main>
  )
}

export default App
