import React from 'react';
// import 'bulma/css/bulma.css';

const CoolButton = (props) => {
    let classStr='button '
    if(props.isSmall) {classStr += "is-small "}
    if(props.isDanger) {classStr += "is-danger "}
    if(props.isSuccess) {classStr += "is-success "}
    if(props.isPrimary) {classStr += "is-primary "}

    return (
        <button className={classStr}>{props.buttonValue}</button>
    );
  };

  export default CoolButton;