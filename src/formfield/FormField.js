import React from 'react';

function FormField({label, type, placeholder}) {
    // eslint-disable-next-line react/prop-types

    return (
        <>
        <form>
                <div class="field">
                    <label class="label">{label}</label>
                    <div class="control">
                        <input class="input" type={type} placeholder={placeholder} />
                    </div>
                </div>
        </form>    
</>
    )
}



export default FormField;





