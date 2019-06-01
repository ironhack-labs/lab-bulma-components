import React, {Component} from "react";
import listClass from "../constants"

class CoolButton extends Component{

    render() {   
        let {isSmall, isDanger, isSuccess, className} = this.props;
        let propsV = Object.keys(this.props);
        let classN = 'button ';
        let result = propsV.map(element => listClass[element] || '');
        let final = classN + result.join(' ')

        {console.log(final)}
        return (
            <div>
                <button className={final}>{this.props.children}</button>
            </div>
        )
    }
}

export default CoolButton;