import React from 'react';





class CoolButton extends React.Component {
    render () {
        const {buttonName, classButton} = this.props;
        
        return (
            <button className={classButton}>{buttonName}</button>
        );
    }
}

export default CoolButton;