import React, {Component} from 'react';

class CoolButton extends Component {
render(){
const {text} = this.props;
return (
    <React.Fragment>
        <a class="button is-primary">{text}</a>
    </React.Fragment>
)

}
}


export default CoolButton;