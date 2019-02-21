import React from 'react';

const CoolButton = ({isSmall, isDanger, isSuccess, className, children}) => {
    const classNameComputed = `button ${className ? className : ''} ${isSmall ? 'is-small':''} ${isDanger ? 'is-danger':''} ${isSuccess ?'is-success':''}`;
    return(
        <a className={ classNameComputed }>{children}</a>
    )
}

export default CoolButton;