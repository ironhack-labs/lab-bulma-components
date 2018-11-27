import React, {Component} from "react";

class Formfield extends Component {
    render(){

    const {name, className, type, placeholder} = this.props;

        return(
            <div className="field">
                    <label className="label">{this.props.name}</label>
                <div className="control">
                    <input className={this.props.className} type={this.props.type} placeholder={this.props.placeholder} />
                </div>




            </div>
        )
    }
}


export default Formfield;