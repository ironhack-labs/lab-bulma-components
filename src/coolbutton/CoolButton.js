import React from 'react';

const dictionary = {
    isSuccess: 'is-success',
    isDanger: 'is-danger',
    isPrimary: 'is-primary',
}

// function CoolButton(props) {
//     let classes = `button ${props.ClassName}`;
//     Object.keys(props).forEach((key) => {
//         if (dictionary[key]){
//             class += " " + dictionary[key];
//         }
//     })
//     return (
//         <button className={classes}>{props.children}</button>
//     )
// }

const CoolButton = (props) => {
    return (
        <div>
            <button className={dictionary}>{props.children}</button>
        </div>
    )
};

export default CoolButton;