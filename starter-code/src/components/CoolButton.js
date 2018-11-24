import React, {Component} from 'react';

class CoolButton extends Component{    
    render(){
        return(            
            <a className={this.props.className}> {this.props.children}</a>
        );
    }
}

export default CoolButton;