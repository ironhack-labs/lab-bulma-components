import React from 'react'



export default class FormField extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="e.g Alex Smith"/>
  </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com"/>
  </div>
                        </div>

                <div className="control">
                    <label className="label">Password</label>
                    <input className="input" type="password" placeholder="pass" />
                </div>
            </div>
            
        )
    }
}
