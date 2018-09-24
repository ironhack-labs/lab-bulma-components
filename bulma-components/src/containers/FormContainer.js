import React, { Component } from 'react';
import Signup from '../components/Signup/Signup';
import Message from '../components/Message/Message';

class FormContainer extends Component {
    constructor(props) {
        super(props);

        this.createAccount = this.createAccount.bind(this);
    }

    state = {
      createdAccount: false
    };

    createAccount(e) {
        e.preventDefault();

        this.setState({
            createdAccount: true
        });

    }

    render() {
        return (
            <div>
                {
                   this.state.createdAccount ? ( <Message isSuccess title="Hello World">
                        You created your account!.
                    </Message>) : <Signup createdAc={ this.createAccount }/>
                }
            </div>
        );
    }
}

export default FormContainer;