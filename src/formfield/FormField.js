import React from 'react';
import './Formfield.css'

function FormField(props){
    return(

        <div className='container'>

            <form>
                <label>
                    {props.label}
                </label>
                <br></br>
                <input type="input" type={props.email} placeholder={props.placeholder}/> 
            </form>

        </div>

    );
}

export default FormField;