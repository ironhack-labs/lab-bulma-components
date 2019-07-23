import React, {Component} from "react";

const CoolButton = ({isSmall, isDanger, isSuccess, className, children}) => {
  className ? className = className : className = '';
  isDanger ? isDanger = 'is-danger ' : isDanger = '';
  isSmall ? isSmall = 'is-small ' : isSmall = '';
  isSuccess ? isSuccess = 'is-success ' : isSuccess = '';
  className += ' ' + isDanger + isSmall + isSuccess + 'button';
  return (
    <button className={className}>{children}</button>
  )
}


export default CoolButton;
