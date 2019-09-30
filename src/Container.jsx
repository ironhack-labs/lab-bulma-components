import React, { Component } from 'react'

const lookup = {
    isFluid: 'is-fluid',
    isWidescreen: 'is-widescreen',
    isFullHD: 'is-fullhd'
}

class Container extends Component {

    render() {
        let propClassString = ['container', this.className, ...Object.keys(this.props).map(c => lookup[c])].filter(e => e).join(' ')
        return (
            <div className={propClassString}>
                {this.props.children}
            </div >
        );
    }
}

export default Container;
