import React from 'react';

class CoolButton extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){

       
            


        return(
            <div>
             
            <button onClick={this.props.changeStyles} style={this.props.styling}>{this.props.children}</button>
                    
            </div>
        )
    }

}

export default CoolButton;

