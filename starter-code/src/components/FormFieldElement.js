import React from "react"

export default class FormFieldElement extends React.Component{
    render(){
        return (
                    <div className="formFieldElement">
                        <div class="field">
                            <label class="label">{this.props.label}</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="e.g Alex Smith"/>
                            </div>
                        </div>
                    </div>
        )
    }
}

