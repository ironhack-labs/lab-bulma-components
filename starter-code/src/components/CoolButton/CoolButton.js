import React, {Component} from 'react';
import './CoolButton.css';

class CoolButton extends Component {
  render(props) {
    return (
      <div className="CoolButton">
        <p>
          {/* {this.props.className} */}
        </p>
        <p>
          {this.props.children}
        </p>
        {/* <button className="{this.props.className}" class="button is-danger is-small">Button 1</button> */}
        {/* <button class="button is-small is-success">Button 2</button> */}
      </div>
    );
  }
}

export default CoolButton;




{/* <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
<CoolButton isSmall isSuccess>Button 2</CoolButton> */}