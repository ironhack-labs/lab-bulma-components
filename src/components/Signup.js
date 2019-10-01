import React from 'react';
import Formfield from './FormField';
import CoolButton from './CoolButton';
import Navbar from './Navbar';


class Signup extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <Formfield  theLabel="Name" type="text" placeholder="e.g Randy Dandy"/>
        <Formfield  theLabel="Email" type="email" placeholder="e.g randy@gmail.com"/>
        <Formfield  theLabel="Password" type="password" placeholder="1234567"/>
        <CoolButton className="is-success">Submit</CoolButton>
      </div>
    )
  }
}


export default Signup;