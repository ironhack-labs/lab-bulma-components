import React from 'react';

const CoolButton = (props) => {
    return (
        <div>
           <button className="button is-rounded my-class is-danger is-small">Login</button> 
           <button class="button is-small is-success">Signup</button>
        </div>
    );
};

export default CoolButton;