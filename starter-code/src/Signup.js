import React from 'react';
import 'bulma/css/bulma.css';

class Signup extends React.Component {
  render () {
    return (
      <div>
 <div>
       <div class="field">
          <label class="label">Password</label>
          <div class="control">
          <input class="input" type="password" placeholder="******"></input>
          </div>
        </div>
        <div>
        <button class="button is-white is-danger is-large is-hovered is-focused">Submit</button>
      </div>

      </div>
  
      </div>
    )
  }
}

export default Signup;