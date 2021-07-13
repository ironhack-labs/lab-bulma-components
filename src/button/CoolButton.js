import React from "react"
import 'bulma/css/bulma.css'

function CoolButton({isSmall, isDanger, className, isSuccess, children}){
    let testClass = "button"
    if (isSmall){
        testClass += " is-small"
    }
     if (isDanger){
        testClass += " is-danger"
    }
     if (isSuccess){
        testClass += " is-success"
    }
     if (className){
        testClass += " is-rounded my-class"
    }
    return (
        <>
        <button class={testClass}>{children}</button>
        </>
    )
    
}

export default CoolButton