import React from "react";

class Coolbutton extends React.Component {
  render() {
    return (
      <div>
        <Coolbutton isSmall isDanger className="is-rounded my-class">
          Button 1
        </Coolbutton>
        <Coolbutton isSmall isSuccess>
          Button 2
        </Coolbutton>
      </div>
    );
  }
}

export default Coolbutton;
