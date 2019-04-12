import React, {Component} from 'react';


class NavItem extends Component{

    render(){
        return(
            <a className="navbar-item" href={this.props.href}>
                {this.props.children}
            </a>
        );

    }
}

export default NavItem;