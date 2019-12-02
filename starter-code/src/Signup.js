import React from 'react';
import NavbarComponent from './NavbarComponent';
import FormField from './FormField';
import CoolButton from './CoolButton';


class Signup extends React.Component {


  render() {

    return (
      <div className="Signup">
<h2>SIGNUP</h2>
<FormField />
<div className="field">
  <label className="label">Password</label>
  <div className="control">
    <input className="input" type="password" placeholder="e.g Alex Smith" />
  </div>
  </div>



<CoolButton buttonClass="is-rounded my-class is-danger is-small"  text="login"/>
        <CoolButton buttonClass="is-small is-success" text="signup"/>


</div>
    );
  }
}

export default Signup;