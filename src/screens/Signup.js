import React from 'react';
import NavBar from '../components/NavBar';
import FormField from '../components/FormField';
import CoolButton from '../components/CoolButton';

const Signup = () => {
  return (
    <div className="Signup">
      <NavBar />
      
        <div className="columns is-centered" style={{ marginTop: '10px' }}>
          <div className="column is-half">
            <form action="">
              <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
              <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
              <div className="field">
                <p className="control">
                  <CoolButton isSmall isSuccess>Register</CoolButton>
                </p>
              </div>
            </form>
          </div>
          <div className="column is-half">
          </div>
        </div>
    </div>
  )
}

export default Signup;