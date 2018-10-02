import React from "react";
import Navbar from "./dist/navbar"
import FormField from "./dist/formfields"

const App = () => {
    return (
        <div>
            {Navbar}
            {FormField}
        </div>
    )
}
module.exports = App;