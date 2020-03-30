import React from 'react';

const CoolButton = props => {
    // console.log(props);
    const {isSmall, isDanger, className, isSuccess,isInfo ,children} = props;
    const cls = `button ${className} ${isSmall ? 'is-small' : ''} ${isDanger ? 'is-danger':''} ${isSuccess ? 'is-success' : ''} ${isInfo ? 'is-info' : ''}`
    return (
        <button className={cls}>{children}</button>
    )
}
export default CoolButton;