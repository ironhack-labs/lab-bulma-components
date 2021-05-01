import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './components/navbar/Navbar';
import FormField from './components/formField/FormField';
import CoolButton from './components/coolButton/CoolButton'

const App = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <div className="container">
        <form>
          <FormField label="Name" type="text" placeholder="Jane" />
          <FormField label="Email" type="email" placeholder="jane@email.com" />
          <FormField label="Password" type="password" placeholder="**********" />
          <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
          <CoolButton isSmall isSuccess>Button 2</CoolButton>

       </form>
        </div>
      </main>
    </div>
  )
};

export default App;
