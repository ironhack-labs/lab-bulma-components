import React from 'react';

const CoolButton = (props) => {
  const {isSmall, isDanger, className, isSuccess, children} = props;
  const classButton = `
  button
  ${className}
  ${isSmall ? 'is-small' : ''}
  ${isDanger ? 'is-danger' : ''}
  ${isSuccess ? 'is-success' : ''}
  `
  
  return (
    <button className={classButton}>{children}</button>
  )

};

export default CoolButton

