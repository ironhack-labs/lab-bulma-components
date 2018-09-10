import React from "react";

class MyButton extends React.Component {

  
handleClick() {
    console.log('this is:', this);

  }


  render() {
    return (
      <div>
        <button  onClick={(e) => this.handleClick(e)} type={this.props.type} className="is-small is-danger button is-rounded my-class">
          {this.props.label}
        </button>
      </div>
    );
  }
}

export default MyButton;
