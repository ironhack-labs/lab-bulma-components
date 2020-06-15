import React from 'react';

// function CoolButton(props) {
//     return <button class="button" >{props.value}</button>
// }

class CoolButton extends React.Component{
    render(){
        let classes = 'button ' + this.props.className 
        if(this.props.isSmall) {
            classes += ' is-small'
        }
        if(this.props.isDanger) {
            classes += ' is-danger'
        }
        if(this.props.isSuccess) {
            classes += ' is-success'
        }
        if(this.props.isPrimary) {
            classes += ' is-primary'
        }
        return <button type={this.props.type} class={classes}>{this.props.children}</button>
    }
}

export default CoolButton;