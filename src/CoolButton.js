import React from 'react';

function CoolButton({isSmall, isDanger, className, isSuccess, children}) {
    // eslint-disable-next-line react/prop-types
let testClass = "button";
    if(isSmall){
        testClass += " is-small"
    } if(isDanger){
        testClass += " is-danger"
    } if(className){
        testClass += " is-rounded my-class"
    } if(isSuccess){
        testClass += " is-success"
    }


    return (
        <>
            <button class={testClass}>{children}</button>
            
        </>
    )
}



export default CoolButton;