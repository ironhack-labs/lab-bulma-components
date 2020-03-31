import React from 'react'
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton'

const Signup = (data) => {
    return (
    <div>
        <Navbar />
        <FormField />
        <div>
      <div className="field">
        <label className="label">Pasword</label>
        <div className="control">
          <input className="input" type="text" placeholder="Password" />
        </div>
      </div>
      </div>
        <CoolButton label="Submit" >Button 2</CoolButton>
    </div>
    );
  }

export default Signup