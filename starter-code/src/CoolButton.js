import React from "react";

class CoolButton extends React.Component {
    render() {

        console.log('props=', this.props);
        const {primary, success, danger} = this.props;

        return (
            <div className="CoolButton">
            {/* <button class="button is-small is-success">Button 2</button> */}


            </div>
            );
  }
};

export default CoolButton;
