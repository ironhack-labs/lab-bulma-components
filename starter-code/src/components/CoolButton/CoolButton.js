import React, {Component} from 'react';
import './CoolButton.css';

class CoolButton extends Component {
  render(props) {
    return (
      <div className="CoolButton">
        {(this.props.isDanger && this.props.isSmall) && 
        <button className={`button is-danger is-small ${this.props.className}`}>{this.props.children}</button>
        }
        {(this.props.isSuccess && this.props.isSmall) && 
        <button className={`button is-success is-small`}>{this.props.children}</button>
        }
        </div>
        );
      }
    }
    export default CoolButton;