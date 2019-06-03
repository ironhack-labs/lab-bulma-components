import React from 'react'
import FormField from "../components/FormField"
const formContainer = () => {
    return (
        <section>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        </section>
    )
}
export default formContainer