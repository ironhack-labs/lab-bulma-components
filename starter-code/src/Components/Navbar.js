import React, {Component} from 'react';


class Navbar extends Component{


    render(){
        return(
            <nav className={`navbar${this.props.type === undefined? '' : this.props.type} is-gray`}>
                    {this.props.children}
            </nav>
        );

    }
}

export default Navbar;