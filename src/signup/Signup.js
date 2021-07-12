import React from 'react';

function Signup (props) {
    return (
        <div>
            {props.navbar}
            {props.name}
            {props.email}
            {props.password}
            {props.button}
        </div>
    );
}


export default Signup;