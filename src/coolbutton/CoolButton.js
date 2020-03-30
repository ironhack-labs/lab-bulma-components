import React from 'react'

const CoolButton = props => {
    console.log(props)
    let {isSmall, isDanger, className, isSuccess, isPrimary, children} = props;
    const classes = `button ${className} ${isSmall ? 'is-small' : ''} ${isDanger ? 'is-danger':''} ${isSuccess ? 'is-success' : ''} `
    return (
        <button className={classes}>{props.children}</button>
    );
  };

export default CoolButton