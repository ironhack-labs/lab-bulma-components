import React from 'react';
import Container from './container/Container';
import FormField from './formfield/FormField';
import Navbar from './navbar/Navbar';
import SignUp from './signup/SignUp';

const App = () => {
  return (
    <React.Fragment>
    {/* Iterations 1-3 */}
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g alexsmith@gmail.com" />
    {/* Iteration 4 */}
      {/* <SignUp /> */}
    {/* Iteration 5 */}
      {/* <Container isInfo/> */}
    </React.Fragment>
  );
};

export default App;
