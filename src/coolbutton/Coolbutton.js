import 'bulma/css/bulma.css';
import React, {Component} from "react";

class Coolbutton extends Component {
    render() {
        return (
            <button className={this.props.class}> {this.props.cta} </button>
        );
    }
}

export default Coolbutton;