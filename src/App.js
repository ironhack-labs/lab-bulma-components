import React from 'react';
import Navbar from './navbar/Navbar';
import Formfield from './formfield/Formfield'
import Coolbutton from './Coolbutton/Coolbutton'
import 'bulma/css/bulma.css';

const App = () => {

  return (

    <main>

      <section>
        <Navbar />
      </section>

      <form>
        <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
        <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <Formfield label="Password" type="password" placeholder="****" />
        <Coolbutton className="button is-link is-outlined" text="Signup" /> 
      </form>

    </main>

  )
};

  export default App;
