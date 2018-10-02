import React from "react";
import {Menu} from "./menu.js"
import {Form} from "./form.js"

export const App = () => {
    return (
        <div>
            <Menu />
            <Form label="Name" type="text" placeholder="q pasa" />
            <Form label="Email" type="email" placeholder="q pasa" />

        </div>
    )
}
