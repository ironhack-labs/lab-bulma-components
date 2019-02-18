import React, { Component } from "react";

class CoolButton extends Component {
  render() {
    console.log(this.props);

    const { className} = this.props;

    return (
      <div>
        <a className= {className}>

        </a>
      </div>
    );
  }
}

export default CoolButton;


{/* <button class="button is-rounded my-class is-danger is-small">Button 1</button>
<button class="button is-small is-success">Button 2</button>

<CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
<CoolButton isSmall isSuccess>Button 2</CoolButton> */}