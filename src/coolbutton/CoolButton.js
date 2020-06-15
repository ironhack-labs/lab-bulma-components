import React from 'react'

const CoolButton = props =>{
    let myclass = 'button '+ props.className
    
    myclass += props.isSmall ? 'is-small ' : ''
    myclass += props.isSuccess ? 'is-success ' : ''
    myclass += props.isDanger ? 'is-danger ' : ''


    return (

        <div>
            <button className={myclass}>{props.children}</button>
        </div>
    )
}

export default CoolButton