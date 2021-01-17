import React from 'react';
import 'bulma/css/bulma.css';


class CoolButton extends React.Component {
    render() {
        return <button className = {this.props.className}>{this.props.value}</button>;
    }
}

export default CoolButton;