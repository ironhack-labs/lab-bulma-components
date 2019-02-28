import React, {Component} from 'react';

class FormField extends Component {
render(){
const {placeholder} = this.props;
return (
    <React.Fragment>
    <div className="field">
        <label className="label">Name</label>
        <div className="control">
            <input className="input" type="xxxx" placeholder={placeholder}/>
        </div>
    </div>
    </React.Fragment>
)

}
}


export default FormField;