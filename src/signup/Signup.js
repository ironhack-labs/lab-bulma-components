import React from 'react';
import 'bulma/css/bulma.css';
import FormField from "../formfield/FormField"
import CoolButton from "../button/CoolButton"

const Signup = () => {
  return (
    <div>
      <nav>
        <form>
          <FormField label="Name" type="text" placeholder="e.g. John Smith"/>
          <FormField label="Email" type="email" placeholder="e.g. smit@popo.com"/>
          <FormField label="Password" type="password" placeholder="*******"/>
          <CoolButton isPrimary isRounded isSuccess text="Submit"/>
        </form>
      </nav>
    </div>
  );
};

export default Signup;