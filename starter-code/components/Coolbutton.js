import React from 'react'

function CoolButton(props) {

  
    if(props.isDanger) return <button className="button is-rounded my-class is-danger is-small">{props.text}</button>
    else return <button className="button is-small is-success">{props.text}</button>

}

export default CoolButton