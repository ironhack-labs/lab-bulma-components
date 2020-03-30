import React from 'react';
import 'bulma/css/bulma.css';

const CoolButton = props => {
  
  const  { isSmall, isDanger, className, isSuccess, children } = props

const classNameString = `
button
${className}
${isSmall ? "is-small" : ""}
${isDanger ? "is-danger" : ""}
${isSuccess ? "is-success" : ""}
  `
  

return (
 
    <button className={classNameString}>{children}</button>

  );
};

export default CoolButton
