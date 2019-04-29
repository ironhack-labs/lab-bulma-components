import React from 'react'

export default class CoolButton extends React.Component {
  render() {
    let classes = this.props.className
    if (this.props.isSmall != undefined) classes += ' is-small';
    if (this.props.isDanger != undefined) classes += ' is-danger';
    if (this.props.isSuccess != undefined) classes += ' is-success';
    classes += ' button'

    return (
      <button className={classes}>{this.props.children}</button>
    )
  }
}
