import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './components/navbar/Navbar';
import FormField from './components/formField/FormField';

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
       </form>
        </div>
      </main>
    </div>
  )
};

export default App;
