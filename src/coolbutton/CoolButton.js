import './CoolButton.css'
import 'bulma/css/bulma.css';
import React from "react";

const CoolButton = (props) => {
    return (
        <div>
            <button className="cool-button">{props.children}</button>     
        </div>    
    );
  };

  export default CoolButton; 