import React from 'react'

function CoolButton(props) {

    let classSum = ''

    for(let i = 0; i < props.length ; i++){
        if(props[i] === 'isPrimary') classSum += 'is-primary ' 
        
        else if(props[i] === 'isSuccess') return classSum += 'is-success ' 
        
        else if(props[i] === 'isDanger') return classSum += 'is-danger ' 
    }

    return (

    <section className="buttons-container">
        <button className={classSum}>Button 1</button>
    </section>

    )
}

export default CoolButton