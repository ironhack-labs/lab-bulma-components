import React from 'react'

const FormField = ({ text, type, placeholder }) => {
    return (
        <>
            <div class="field">
                <label class="label">{text}</label>
                <div class="control">
                    <input class="input" type={type} placeholder={placeholder} />
                </div>
            </div>
        </>
    )
}

export default FormField
