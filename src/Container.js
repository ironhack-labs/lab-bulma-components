import React from 'react';
import 'bulma/css/bulma.css';

class Container extends React.Component{
    render(){
        return(
            <div class="container">
                <div class="notification">
                    {this.props}
                </div>
            </div>
        )
    }
}

export default Container