import React, {Component} from 'react';
import {Button} from 'react-bulma-components';

class Button2 extends Component{
    render(){
        return(
            <div>
                <Button className="button is-small is-success">Follow Me</Button>
                <Button className="button is-rounded my-class is-small is-danger">O Siempre No</Button>
            </div>
        );
    }
}

export default Button2;