import React from 'react'

class Form extends React.Component {
  render() {

    return (
      <div class="field form-top">

        <div>
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="e.g Alex Smith" />
          </div>

        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input" type="passord" placeholder="e.g. coolpassword101" />
          </div>

        </div>



      </div>
    )
  }
}

export default Form;