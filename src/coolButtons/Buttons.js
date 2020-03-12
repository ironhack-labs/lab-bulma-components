import React from 'react'
import Button from './Button'

import './Buttons.css'

 const Buttons = ({buttonClasses}) => {
    return (
       <>
           <div>
               <hr/>
                <h2>Bulma Buttons</h2>
               <hr/>
                <div className='container'>
                    { Object.values(buttonClasses).map(val => <Button key={val} buttonClass={`button ${val}`} buttonName = {val}/>)}
                </div>
           </div>
       </>
    )
}

export default Buttons