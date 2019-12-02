import React, { Component } from 'react'

class CoolButton extends React.Component {
    render() {
        return(
            <button className ={this.props.class} type='submit'>{this.props.children}</button>
        )
    }
}


export default CoolButton