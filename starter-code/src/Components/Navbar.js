import React, {Component} from 'react';


class Navbar extends Component{


    render(){
        return(
            <nav className={`navbar${this.props.type === undefined? '' : this.props.type}`}>
                    {this.props.children}
            </nav>
        );

    }
}

export default Navbar;