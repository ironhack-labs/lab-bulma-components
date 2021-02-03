import React from 'react';
import {Navbar} from './navbar/Navbar'
import {FormField} from './formfield/FormField'
import {CoolButton} from './coolbutton/CoolButton'

const App = () => {

  return (
    <React.Fragment>
    <Navbar />
    <form class="box">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

      <div class="field is-grouped">
          <CoolButton class="button is-rounded is-danger" text='Cancel' />
          <CoolButton class="button is-success" text='Submit' />
      </div>
    </form>
  </React.Fragment>
  )
}

export default App;
