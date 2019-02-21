import React , { Component} from 'react';

export default class CoolButton extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { className, name } = this.props;
    return (
    <div>
      <button className={className}>{name}</button>
    </div>
    )
  }
}


