import React from "react";

function FormField(props) {
    return (
<section>
    <div class="field" >
        <label class="label">{props.label}</label>
        <div class="control">
            <input class="input" type={props.type} placeholder={props.placeholder} />
        </div>
    </div>
</section>
    
    )}

export default FormField;