import React, {Component} from 'react';
import './App.css';
class CoolButton extends Component {
    render () {
        return (
            <button className={checkClass(this.props)} >{this.props.children}</button>
        )
        function checkClass(props){
            let styles = "button "
            if(props.isSmall) styles += "is-small "
            if(props.isDanger) styles += "is-danger "
            if(props.isSuccess) styles += "is-success "
            if(props.className) styles += props.className
            return styles;
        }
    }
}export default CoolButton;