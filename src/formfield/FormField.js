import React from 'react'
import InputField from './InputField'
import Button from '../coolButtons/Button'

import 'bulma/css/bulma.css';
import './FormField.css'

 const FormField = (props) => {
     const {formArr, buttonName, title} = props
    return (
        <div className='form-div'>
            <h2>{title}</h2>
            <hr/>
            <form>
                {formArr.map(eachInput =>( <InputField key={eachInput.type}  eachInput={eachInput}/>))}
                <Button buttonClass={'button is-info'} buttonName={buttonName}/>
            </form>
        </div>
    )
}

export default FormField