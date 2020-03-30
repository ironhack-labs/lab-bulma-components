import React from 'react';

const Message = props => {
    console.log(props);
    const {isInfo,title,children}=props
    return (
        <div>
            <div className={isInfo}>{title}</div>
            <div>{children}</div>
        </div>
    )
}
export default Message;