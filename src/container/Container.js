import React from "react";
import "bulma/css/bulma.css";
import Message from "../message/Message";

const Container = () => {
  return (
    <div className="container">
      <Message
        className="isInfo"
        title="Hello World"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        strong="Pellentesque risus mi"
      />
    </div>
  );
};

export default Container;
