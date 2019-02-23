import React, { Component } from 'react';

class CoolButton extends React.Component {
    render() {
        let classes =['button'];
        if("isSmall" in this.props){
            classes.push("is-small");
        }
        if("isDanger" in this.props){
            classes.push("is-danger");
        }
        const classesString = classes.join(" ");
    return (
            <button class={classesString}>{this.props.children}</button>
    )
    }
}

export default CoolButton;