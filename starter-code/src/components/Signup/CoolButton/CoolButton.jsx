import React from 'react';
import './CoolButton.css';

class CoolButton extends React.Component {
    render () {
    const { classNameText, buttonText } = this.props
        return (
            <div className='buttonDiv'>
                <button className={classNameText}>{buttonText}</button>
            </div>
        );
    }
}


export default CoolButton;