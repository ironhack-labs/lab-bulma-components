import React, { Component } from 'react'

export default class FormField extends Component {
  render() {
    return (
      <div>
        <div>
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="e.g Benito Camelas" />
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" width="200px" placeholder="e.g. benitocamelas@gmail.com" />
          </div>
        </div>
      </div>
    )
  }
}
