import React, {Component} from "react"

class CoolButton extends Component {
    render(){

      const {name, isSuccess, isSmall, isDanger, className} = this.props

        let cssClasses = "button " + className
        if(isSmall){
            cssClasses += " is-small"
        }
        if(isDanger){
          cssClasses += " is-danger"
        }
        if(isSuccess){
          cssClasses += " is-success"
        }
        return (
          <div>
            <button className={cssClasses}>{name}</button>
          </div>
        );
    }
}

export default CoolButton;
