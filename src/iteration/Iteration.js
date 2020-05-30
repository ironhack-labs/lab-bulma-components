import React from "react";
import "bulma/css/bulma.css";
import "./Iteration.css";
import Container from "../container/Container";

function Iteration(props) {
  return (
    <Container>
      <div className="iteration">
        <h5>Iteration #{props.iterationNumber}</h5> 
        {props.children} 
      </div>
    </Container>
  );
}

export default Iteration;
