import React from 'react';
import 'bulma/css/bulma.css';


class CoolButton extends React.Component {
    render() {
        return <a href={this.props.href}><button className = {this.props.className}>{this.props.value}</button></a>;
    }
}

export default CoolButton;