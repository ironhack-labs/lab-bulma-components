import React from 'react';

class ButtonTemp extends React.Component {
  render(){
    let theStyle = "button";
    if(this.props.isSmall){
      theStyle += "is-small"
    }
    if(this.props.isRounded){
      theStyle += " is-rounded"
    }
    if(this.props.isDanger){
      theStyle += " is-danger"
    }
    if(this.props.isSuccess){
      theStyle += " is-success"
    }

    return(
      <button style ={{margin: "15px"}} className = {theStyle} >
        Press Button
      </button>
    )
  }
}

export default ButtonTemp;