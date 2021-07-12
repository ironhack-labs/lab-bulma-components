import React from 'react'

class CoolButton extends React.component {
    render() {
        return (
            <div>
                <button className="button">{this.props.name}</button>
            </div>
        )
    }
}

export default CoolButton;