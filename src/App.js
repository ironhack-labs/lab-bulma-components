import React, { Fragment } from 'react';

import Navbar from './navbar/Navbar';
import FormField from './FormField/FormField';
import CoolButton from './CoolButton/CoolButton';

const App = () => {
  return (
    <Fragment>
      <Navbar />;
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <CoolButton isSmall isDanger className="is-rounded my-class">
        Button 1
      </CoolButton>
      <CoolButton isSmall isSuccess>
        Button 2
      </CoolButton>
    </Fragment>
  );
};

export default App;
