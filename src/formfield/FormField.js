import React from 'react'
import InputField from './InputField'
import 'bulma/css/bulma.css';

 const FormField = ({formArr}) => {
    return (
        <form>
           {formArr.map(eachInput =>( <InputField key={eachInput.type}  eachInput={eachInput}/>))}
        </form>
    )
}

export default FormField