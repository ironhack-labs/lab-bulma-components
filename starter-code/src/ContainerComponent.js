import React from 'react';

function ContainerComponent(props) {
  return(
    <div className="container">
      {props.children}
    </div>
  )
}

export default ContainerComponent;