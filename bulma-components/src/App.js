import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/Navbar'
import FormField from './formfield/FormField'
import CoolButton from './coolbutton/CoolButton'
import 'bulma/css/bulma.css'

function App() {
  return (
    <main>
      <header>
        <div className="App">
          <Navbar />
        </div>
      </header>
      <section>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <div>
          <CoolButton isSmall isDanger className="is-rounded my-class" class="button is-rounded my-class is-danger is-small" test="Button 1"></CoolButton>
          <CoolButton isSmall isSuccess class="button is-small is-success" test="Button 2"></CoolButton>
        </div>
      </section>


    </main>
  );
}

export default App;