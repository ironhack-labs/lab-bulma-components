import React, {Component} from 'react'

class CoolButton extends Component {
    constructor (props){
        super(props)
    }
    render(){
        return (
            <>
            <button class="button is-rounded my-class is-danger is-small"> {this.props.text1} </button>
            <button class="button is-small is-success"> {this.props.text2} </button>

            </>
        )
    }
    
}
export default CoolButton