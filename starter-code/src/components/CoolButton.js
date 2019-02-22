import React from "react";

class CoolButton extends React.Component {
  render() {

    console.log("props=", this.props);
    const { title1, title2 } = this.props;

    return (
      <div>
          <br></br>
        <button className="button is-rounded my-class is-danger is-small">
          {title1}
        </button>

        <button className="button is-small is-success">
          {title2}
        </button>
      </div>
    );
  }
}


export default CoolButton;
