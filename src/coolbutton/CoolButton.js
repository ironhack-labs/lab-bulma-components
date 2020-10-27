
import React from 'react'


const CoolButton = props => {
    return (
        <React.Fragment>
            <button className="button is-rounded my-class is-danger is-small">{props.children}</button>
            <button className="button is-small is-success">{props.children}</button>
      </React.Fragment>
    );
};

export default CoolButton