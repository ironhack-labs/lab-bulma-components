import React, { Component } from "react";

class CoolButton extends Component {



    render() {

        if (this.props.isSmall) {
            if (this.props.isDanger) {
                return(
                    <button className="button is-small is-danger is-rounded">{this.props.children}</button>
                )
            } if (this.props.isSuccess) {
                return(
                    <button className="button is-small is-success">{this.props.children}</button>
                )
            }
          
        }  return (
            <button className="button is-primary">{this.props.children}</button>
        );

    }
}

export default CoolButton;
