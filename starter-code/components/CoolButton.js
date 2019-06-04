import React from 'react'


const CoolButton = ({ isDanger, isSuccess, className, children }) => {

  let classes = () => {
    if (isDanger) return className + " button is-small is-danger"
    else if (isSuccess) return "button is-small is-success"
  }

  return (
    <button className={classes()}>{children}</button>
  )
}

export default CoolButton