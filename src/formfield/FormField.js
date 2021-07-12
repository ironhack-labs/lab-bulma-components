import React from 'react';

function FormField(props) {
    return (
        <div>
< div  className = " field " > 
    < label  className = " field label " > {props.label} </ label > 
    < div  className = " control " > 
    < input  className = " input " tipo = {`${props.type}`} placeholder = {`${props.placeholder}`} />

    </ div >
</ div > 
</ div >


    )}

export default FormField;
