import React from 'react';


import Navbar from '../navbar/Navbar';
import CoolButton from '../coolbutton/CoolButton';

function Signup (props) {
    return (
        <div>
        <Navbar/>
    
            {props.name}
            {props.email}
            {props.password}
            {props.button}
        </div>
    );
}


export default Signup;