import React, { Component } from 'react'
import Navbar from "./Navbar";
import FormField from "./FormField"
import CoolButton from "./CoolButton";

export default class CoolForm extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <FormField></FormField>
                <CoolButton></CoolButton>
            </div>
        )
    }
}
