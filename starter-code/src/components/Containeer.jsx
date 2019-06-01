import React, {Component} from "react";

class Containeer extends Component{
    render() {
    return (
            <div className="containeer">
            {this.props.children}
            </div>
        )
}
}

export default Containeer;