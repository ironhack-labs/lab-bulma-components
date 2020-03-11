import React from 'react'
import Button from './Button'
import '../../node_modules/bulma/css/bulma.css';

 const Buttons = ({buttonClasses}) => {
    return (
        <div>
            { Object.values(buttonClasses).map(val => <Button key={val} buttonClass={val}/>)}
        </div>
    )
}

export default Buttons