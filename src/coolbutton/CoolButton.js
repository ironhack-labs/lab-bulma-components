import 'bulma/css/bulma.css';
import React, {Component} from "react";

class CoolButton extends Component {

    btn =  'button';

    render() {
      const {isSmall, className} = this.props;
      var a = this.props;
      console.log(a);
      return (
        <button class={this.btn + ` ${className}` }>Button 1</button>
        );
    }
  }

  export default CoolButton;