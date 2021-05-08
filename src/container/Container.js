import React from 'react';

import './Container.css';

const Container = props => {
    return (
        <div class="container">
            <div class="notification is-primary">
               {props.children} 
            </div>
        </div>
    );
};

export default Container;