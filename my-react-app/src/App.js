import React, { Component } from 'react';
import './App.css';

import NavComponent from './components/Nav'
import FormField from './components/FormField'
import CoolButton from './components/CoolButton'


class App extends Component {
  render() {
    return (
      <main>
        <div className="container">

          <section>
            <NavComponent />
          </section>
          <section>
            <FormField />
          </section>
          <section>
            <CoolButton />
          </section>
        </div>
      </main>
    )
  }
}

export default App;
