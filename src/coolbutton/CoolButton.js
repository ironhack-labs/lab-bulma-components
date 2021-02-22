import React from 'react';

const CoolButton = (props) => {
  return (
    <div>
      <button className={props.className}>{props.action}</button>
    </div>
  )
}
export default CoolButton;