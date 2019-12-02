
import React from 'react';

class CoolButton extends React.Component {


  render() {
console.log('PROPS', this.props);

    return (
      <div className="CoolButton">
<button className={`button ${this.props.buttonClass}`}>{this.props.text}</button>

</div>
    );
  }
}

export default CoolButton;