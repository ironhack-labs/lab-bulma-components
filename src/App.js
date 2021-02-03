import React from 'react';
import {Navbar} from './navbar/Navbar'
import {FormField} from './formfield/FormField'
import {CoolButton} from './coolbutton/CoolButton'

const App = () => {

  return (
    <React.Fragment>
    <Navbar />
    <form className="box">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

      <div className="field is-grouped">
          <CoolButton className="button is-rounded is-danger" text='Cancel' />
          <CoolButton className="button is-success" text='Submit' />
      </div>
    </form>
  </React.Fragment>
  )
}

export default App;
