import React from 'react';
import Navbar from './Navbar';
import FormField from './formfield/FormField';
import CoolButton from './coolbutton/CoolButton';
import 'bulma/css/bulma.css';

const App = () => {
  return (
    <main>
      <div>
        <Navbar />
        <div>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        </div>
      </div>
      <div>
        <CoolButton isSuccess className="is-rounded" buttonName="Button 1"></CoolButton>
        <CoolButton isDanger className="is-rounded" buttonName="Button 2"></CoolButton>
      </div>
    </main>
  );
};

export default App;
