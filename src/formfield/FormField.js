import React from "react";
import './FormField.css'
import 'bulma/css/bulma.css';





const FormField = props => {
    return (
        <>
        <div className="field">
            <label className="field-label is-normal">Name</label>
            <div className='control'>
                <input className='input is-info' type={props.type} placeholder='e.g Pedro Tavares'/>
            </div>
        </div>
        <div className="field">
            <label className="field-label is-normal">Email</label>
            <div className='control'>
                <input className='input is-info' type={props.type} placeholder='e.g xpedrotavaresdev@gmail.com'/>
            </div>
        </div>
        </>
    )
}

// class FormField extends React.Component {
//     render() {
//         return (

//         )
//     }
// }

// const FormField = props => {
//     return(
//         <div className="field">
//             <label className='label'>{props.label}</label>
//             <input className='input'></input>
//         </div>
//     );
// };

// <div>


// <FormField label="Name" type="text" placeholder="e.g Pedro Tavares" />
// <FormField label="Email" type="email" placeholder="e.g xpedrotavaresdev@gmail.com" />
// </div>

export default FormField;