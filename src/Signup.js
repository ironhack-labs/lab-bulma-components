import React, { Fragment } from 'react';
import Navbar from './navbar/Navbar'
import  FormField from './formfield/FormField'
import CoolButton from './coolbutton/Coolbutton'

import 'bulma/css/bulma.css';

const App = () => {
  return (
    <Fragment>
      <Navbar/>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <CoolButton name="Submit" color="button is-warning"/>
    </Fragment>

  )
};

export default App;
