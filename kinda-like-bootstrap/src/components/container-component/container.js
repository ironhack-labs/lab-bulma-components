import React from 'react';

class Container extends React.Component {

    render(){

        return <div className="columns">{this.props.children}</div>
    }
}

export default Container;