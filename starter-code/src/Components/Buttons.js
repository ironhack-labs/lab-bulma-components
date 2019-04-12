import React, {Component} from 'react';


class Buttons extends Component{

    render(){
        return(
            <div className='buttons'>
                {this.props.children}
            </div>
        );

    }
}

export default Buttons;