import React, { Component } from 'react';


class CoolButton extends Component {
    render() {

        let str="";
        if(this.props.isSmall){
            str = str + "is-small ";
        }
        if(this.props.isDanger){
            str = str + "is-danger ";
        }
        if(this.props.isSuccess){
            str = str + "is-success ";
        }
        if(this.props.className){
            str = str + this.props.className;
        }
        console.log(str);



        return (
            <button className={"button "+ str}></button>
        );
    }
}


export default CoolButton;