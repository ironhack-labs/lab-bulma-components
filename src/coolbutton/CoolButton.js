import React from "react";
import 'bulma/css/bulma.css';

const CoolButton = ( {className, children} ) => {
    return (
        <button className={`button ${className}`}>{children}</button>
    );
};

export default CoolButton;