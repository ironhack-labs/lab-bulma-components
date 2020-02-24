import React from 'react'


const Message = props => {

        return (
            <div title={props.title}>
                <p>{props.isInfo} <strong>{props.strong}</strong></p>
</div>
    )}

export default Message