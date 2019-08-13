import React from 'react'

const CoolButton = props => {
  return (
    <React.Fragment>
      <button className={props.class}>{props.children}</button>


    </React.Fragment>
  )
}


export default CoolButton