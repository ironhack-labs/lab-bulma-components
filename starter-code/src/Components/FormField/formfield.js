import React from "react";
import FormFieldElement from './FormFieldElement'

class FormField extends React.Component{
    render(){
        return(
            <div className="field">
                <FormFieldElement label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormFieldElement label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            </div>

     
        )
    }
}




export default FormField;