import React, {Component} from 'react'

class FormField extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.label)
            if (this.props.label == "Name"){
                return(
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="e.g Alex Smith"/>
                    </div>
                </div>)
            }else{return(
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com"/>
                    </div>
                </div>)
            }
        
        {/* // console.log(this.props.isSmall)
        // return (this.props.isDanger) ? <button className="button is-rounded my-class is-danger is-small">{this.props.children}</button> : <button className="button is-small is-success">{this.props.children}</button> */}
    }

}


export default FormField