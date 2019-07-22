import React from 'react';

const CoolButton = ({className, children, isDanger, isSmall, isSuccess}) => {
  let classe = '';
  if (isDanger) {
    classe += 'is-danger ';
  }
  if (isSmall) {
    classe += 'is-small ';
  }
  if (isSuccess) {
    classe += 'is-success ';
  }
  return (
    <button className={`button ${classe} ${className}`}>{children}</button>
  )
}

export default CoolButton;