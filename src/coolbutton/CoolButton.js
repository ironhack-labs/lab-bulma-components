import "bulma/css/bulma.css";

import React from "react";

const CoolButton = () => {
    return (
        <div>
            <button className="button is-rounded my-class is-danger is-small">Button 1</button>
          <button className="button is-small is-success">Button 2</button>
        </div>
        
    );
}

export default CoolButton;