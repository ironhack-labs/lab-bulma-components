import React from 'react'

function CoolButton(props) {
    console.log(props)
    let myClass = props.className;
    myClass += (props.isDanger ? 'is-danger' : '')
    myClass += (props.isSmall  ? 'is-small' : '')
    
    return(
        <div>
           <button className={myClass}>{props.title}</button>
        </div>
    )
}



export default CoolButton