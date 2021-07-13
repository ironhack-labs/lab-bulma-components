import React from "react"
import 'bulma/css/bulma.css'

function FormField({label, type, placeholder}){
    return (
    <>
    <form action="/" method="POST">
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

export default FormField