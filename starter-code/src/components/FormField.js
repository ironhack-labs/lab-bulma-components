import React, {Component} from 'react';

class Form extends Component{
  render(){ 
    return(      
      <div>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="e.g Alex Smith"/>
          </div>
        </div>
      </div>
      

    );
  }
}

export default Form;