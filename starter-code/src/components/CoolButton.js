
import React from 'react';

const CoolButton = (props) => {
    const { btnArray } = props;
    let classNameButton = '';

    btnArray.forEach(element => {
        classNameButton += `${element} `;
    });


    return (
        <div>
            <button className={ classNameButton + 'button' }>{props.child}</button>
        </div>
    )
}

export default CoolButton;