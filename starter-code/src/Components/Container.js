import React, {Component} from 'react';


class Container extends Component{

    render(){
        return(
            <div className={`container ${this.props.className}`}>
                {this.props.children}
            </div>
        );

    }
}

export default Container;