import React, {Component} from "react"


class FormField extends Component {
    render(){
        const {name} = this.props
        let type
        if(name === "name"){
            type = "text"
        }
        if(name === "email"){
            type = "email"
        }
        if(name === "password"){
            type = "password"
        }
        
        return (

            <div>
                <div className="field">
                    <label className="label">{name}</label>
                    <div className="control">
                        <input className="input" type={type} placeholder="type here"/>
                    </div>
                </div>
            </div>   
        );
    }
}



export default FormField;





