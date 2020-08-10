import React from 'react';
const CoolButton = (props) => {
  console.log(props)
  const { isSmall, isDanger, className, isSuccess, children, isInfo } = props
  const classNameString = `
    button
    ${className}
    ${isSmall ? 'is-small' : ''}
    ${isDanger ? 'is-danger' : ''}
    ${isSuccess ? 'is-success' : ''}
    ${isInfo ? 'is-info' : ''}

  `
  return (
    <button className={classNameString}>
      {children}
    </button>
  )
};
export default CoolButton;