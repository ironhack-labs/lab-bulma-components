import 'bulma/css/bulma.css';
import React from 'react';

const Button = ({isSmall, isDanger, isSuccess, className, children}) => { 

let cl = `button ${className?'className':''} ${isSmall?'is-small':''} ${isDanger?'is-danger':''} ${isSuccess?'is-success':''} `; 

return ( 

<button className={cl}>{children}</button>
)

}


export default Button