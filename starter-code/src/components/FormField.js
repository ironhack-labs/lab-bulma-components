import React, { Component } from 'react';

import Container from './Container';

class FormField extends Component {
    render() {
        return(
            <Container>
                <div className="columns">
                    <div className="column is-half">
                        <div className="field">
                            <label className="label">{this.props.name}</label>
                            <div className="control">
                                <input className="input" type={this.props.type} placeholder={this.props.placeholder} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}

export default FormField;