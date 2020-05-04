import React from "react";
import "./Main.css"
import FormField from "../formfield/FormField"
import 'bulma/css/bulma.css';

const Main = () => {
    return (
        <article className="form">
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        </article>
    )
}

export default Main