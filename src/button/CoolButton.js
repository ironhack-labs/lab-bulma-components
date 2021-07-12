import React from 'react'

class CoolButton extends React.Component {
    render() {
        return (
            <div>
                <button className={this.props.class}>{this.props.input}</button>
            </div>
        )
    }
}

export default CoolButton;