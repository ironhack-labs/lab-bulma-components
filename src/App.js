import React from 'react';
import Navbar from './navbar/Navbar'
import FormField from './formfield/FormField'
import CoolButton from './coolbutton/CoolButton'
import Signup from './signup/Signup'
import 'bulma/css/bulma.css'

const App = () => {
  return (
    <div>
      <Navbar />
        <FormField label={"Name"} type={"text"} placeholder={"e.g Alex Smith"}/>
        <FormField label={"Email"} type={"email"} placeholder={"e.g. alexsmith@gmail.com"} />
        <CoolButton isSmall isDanger className="is-rounded my-class" title={'Button 1'}/>
        <CoolButton isSmall isSuccess title={'Button 2'}/>
        <Signup />
    </div>
  )
};

export default App;
