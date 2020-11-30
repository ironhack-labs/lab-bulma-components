import React from 'react';
import 'bulma/css/bulma.css';



const CoolButton = props => {
    const dict = {
        isSmall: 'is-small',
        isDanger: 'is-danger',
        isSuccess: 'is-success'
    }
    const propKeys = Object.keys(props); //['isSmall', 'isDanger', 'isSuccess']

    let str = 'button ';
    propKeys.forEach((key) => {
        if (dict[key]) {
            str += dict[key] + ' ';

        }
    })
    return (
        <div className="buttons">

            <button className={str + '' + props.className}>{props.children}</button>

        </div>
    );
};

export default CoolButton;
