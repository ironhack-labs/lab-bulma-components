import React from 'react';
import Navbar from './Navbar'
import FormField from './FormField'
import CoolButton from './CoolButton'
import Message from './Message'

const App = () => {
 
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <section>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="*******" />
        <CoolButton class="button is-medium is-success" name="Signup" />
        <hr/>
        <Message/>
      </section>
    </main>
  )
};

export default App;
