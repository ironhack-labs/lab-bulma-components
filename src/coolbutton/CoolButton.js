import React from 'react';
import 'bulma/css/bulma.css';
import './CoolButton.css';

const CoolButton = ({classTag, children}) => {
    return (
        <div className="btn-div">
            <button className={classTag} type="submit">{children}</button>
        </div>
    );
}

export default CoolButton;