import React, {Component, Fragment} from 'react'


class CoolButton extends Component {
  render(){
    return (
  <Fragment>
      {this.props.isDanger ? <button className="button is-rounded my-class is-danger is-small">{this.props.children}</button> : '' }
      {this.props.isSuccess ? <button className="button is-small is-success">{this.props.children}</button> : ''}
  </Fragment>
    )
  }
}


      export default CoolButton