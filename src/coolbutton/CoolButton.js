import React from 'react';

// const this.props = {
//     isSuccess: 'is-success'
// }


const CoolButton = (props) => {
    return (
        <div>
        <button className={props.className}>{props.children}</button>
        </div>
    )
}

export default CoolButton;