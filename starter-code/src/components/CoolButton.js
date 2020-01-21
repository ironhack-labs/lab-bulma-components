import React from 'react'
import getClassBulma from './classNameBulma'

const CoolButton = (props) => {
  const classNameB = 'button ' + getClassBulma(props);

  return (
    <a className={classNameB}> {props.children} </a>
  )
}

export default CoolButton;