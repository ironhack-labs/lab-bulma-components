import React from 'react';

const CoolButton = (props) => {
  console.log(props);
  
  return (
    <div>
     <button className={`button ${props.className} ${props.isSmall && 'is-small'} ${props.isSuccess && 'is-success'}  ${props.isDanger && 'is-danger'}`} >{props.children}</button>
    </div>
  );
};
export default CoolButton;
