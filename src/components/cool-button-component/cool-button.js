import React from 'react';

class CoolButton extends React.Component {
    render() {
        return (
            <div>
<input type={this.props.button.type} className={this.props.button.class} value={this.props.button.name} />
            </div>

        );
    }
}
export default CoolButton;