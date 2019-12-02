import React from 'react';

class CoolButton extends React.Component {
    render() {
        return(
            <button className ={this.props.class} type='submit'>Button</button>
        )
    }
}

export default CoolButton;

