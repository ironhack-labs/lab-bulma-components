import React from 'react';
import 'bulma/css/bulma.css';

class CoolButton extends React.Component {
    render() {
return(<div>
  <button  className={this.props.clsName}> {this.props.buttontext}</button> 
</div>
)
    }
}

export default CoolButton;