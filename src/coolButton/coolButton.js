import React from 'react';

class CoolButton extends React.Component {

    render() {
        let isSmall = '';
        let isPrimary = '';
        let isSuccess = '';
        let isDanger = '';

        if (this.props.isSmall) {
            isSmall = 'is-small';
        }
        if (this.props.isSmall) {
            isPrimary = 'is-primary';
        }
        if (this.props.isSuccess) {
            isSuccess = 'is-success'
        }
        if (this.props.isDanger) {
            isDanger = 'is-danger';
        }
        
        console.log(this.props);
        
        return (
            <button className={`button ${isSmall} ${isPrimary} ${isSuccess} ${isDanger} ${this.props.className}`}>{this.props.children}</button>
        )
    }
}

export default CoolButton;