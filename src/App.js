import React from 'react';
import Navbar from './navbar/Navbar' // ! not forget the "."
import FormField from './formfield/FormField'

import "bulma/css/bulma.css" // ! need to import the css file

const App = () => {
  return (
    <div>
      <Navbar/>
      <FormField label="Name" type="text" placeholder="e.g FirstName FamilyName" />
      <FormField label="Email" type="email" placeholder="e.g. youremail@domain.com" />   
    </div>



  )
};

export default App;
