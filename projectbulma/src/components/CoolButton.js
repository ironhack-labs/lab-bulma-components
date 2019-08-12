import React from 'react'
import '../styles/cool-button.css'

const CoolButton = props => {

    if(props.numOfButtons === 2) {
        return(
            <div className="button-container">
                <button className="button is-rounded my-class is-danger is-small">Button 1</button>
                <button className="button is-small is-success">Button 2</button>
            </div>
        )
    } else {
        return(
            <div className="signup-container">
                <button className="button is-small is-success">{props.content}</button>
            </div>
        )
    }
}

export default CoolButton
