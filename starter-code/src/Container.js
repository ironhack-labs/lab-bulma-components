import React, { Component } from "react";

import Message from "./Message.js";

class Container extends Component {

  render(){
    return(
      <div className="container">
        <Message name="Hello world!" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi"/>
      </div>
    )
  }

}

// export your component CLASS so that you can display it from other files
export default Container;