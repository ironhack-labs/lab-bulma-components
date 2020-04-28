import React from 'react'
import 'bulma/css/bulma.css';

const CoolButton = props => {
    let newClassName = 'button';
    if(props.className) {
    newClassName = 'button ' + props.className;
    }
    console.log(props.className);
    if (props.isSmall) {
        newClassName += ' is-small'
    }
    if (props.isDanger) {
        newClassName +=' is-danger'
    }
    if (props.isSuccess) {
        newClassName += ' is-success'
    }
    if (props.isPrimary) {
        newClassName += ' is-primary'
    }
    return (
        <div>
            <button className={newClassName}>{props.children}</button>
        </div>
    )
}

export default CoolButton;
