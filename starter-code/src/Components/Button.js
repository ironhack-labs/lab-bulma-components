import React, {Component} from 'react';


class Button extends Component{

    render(){
        return(
            <a className={this.props.color}>
                {this.props.name}
            </a>
        );

    }
}

export default Button;