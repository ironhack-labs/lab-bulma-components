import React from 'react'

function CoolButton(props) {
    console.log(props)   
    
    let SignupButton = "button is-small is-success"
    let LogButton = "button is-rounded my-class is-danger is-small"

    if (props.isSmall == true && props.isDanger == true) {
        return(
            <div>
               <button className={SignupButton}>{props.title}</button>
            </div>
        )
    } else {
        return(
            <div>
               <button className={LogButton}>{props.title}</button>
            </div>
        )
    }    
}

export default CoolButton