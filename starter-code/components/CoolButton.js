import React, { Component } from 'react'

class CoolButton extends Component {

  constructor(props) {
    super(props)
  }


  render() {

    return (
      <a className={this.props.class}>{this.props.name}</a>
    )

  }

}

export default CoolButton