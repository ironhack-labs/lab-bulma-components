import React from 'react'
import classes from '../bulmaClasses'
class CoolButton extends React.Component{
    render(){
          let cssClass = "button ";
          Object.keys(this.props).forEach( el => {
              if(classes[el]) cssClass += classes[el] + " "
          })
          return <button className={cssClass}>{this.props.children}</button>
    }
}
export default CoolButton;