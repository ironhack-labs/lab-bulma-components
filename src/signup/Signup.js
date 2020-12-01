import React from 'react';
import 'bulma/css/bulma.css';
import Formfield from '../formfield/Formfield'
import CoolButton from '../coolButton/CoolButton';

function Signup(){
    return (
<div className="signup">   
<Formfield label="Name" type="text" placeholder="e.g Alex Smith"/>
<Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
<Formfield label="Password" type="password" placeholder="Must contain 8 characters"/>
<CoolButton class="button is-small is-success is-rounded" name="Submit"/>
</div>
    )
}
export default Signup;