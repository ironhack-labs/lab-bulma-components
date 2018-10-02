import React, {Component} from 'react';

class  Singup extends Component{

    render(){
        return(
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
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className="input" type="password" placeholder="********"/>
                    </div>
                </div>

                <button className="button is-small is-success is-rounded ">Send</button>

            </div>
        )
    }
}

export default Singup