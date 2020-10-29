import React from 'react';

const Container = (props) => {
    return(
    <div class="container">
        {props.children}
    </div>    
    );
};

export default Container;