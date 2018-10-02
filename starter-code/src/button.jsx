import React from "react";


class CoolButton extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
  return (
    <div>
       <button className={this.props.className}> {this.props.buttonName}</button>
     </div>
  )
}
}

export default CoolButton