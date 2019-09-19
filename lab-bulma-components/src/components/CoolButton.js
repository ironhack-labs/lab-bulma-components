import React from 'react';

class CoolButton extends React.Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //     }
    // }



    render(){
        return (
            <div>
            <button className={`button ${this.props.className}`} >{this.props.children}</button>
            </div>
        )
    }
}

export default CoolButton;