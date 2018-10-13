import React, {Component} from "react";

class CoolButton extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
       
            <button className={`button ${this.props.isSmall && 'is-small'} ${this.props.isSuccess && 'is-success'} ${this.props.isDanger && 'is-danger'} ${this.props.myclass}`}>{this.props.value}</button>

        

        )
    }
   

}

export default CoolButton;