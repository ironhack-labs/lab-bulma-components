import React, { Component } from 'react'

export default class Signup extends Component {
  render() {
    return (
      <div>
        <nav class="navbar is-transparent">
          <div class="navbar-brand">

            <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">

              <div class="navbar-item has-dropdown is-hoverable">

                <div class="navbar-dropdown is-boxed">
                  <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">
                    Overview
          </a>
                  <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                    Modifiers
          </a>
                  <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                    Columns
          </a>
                  <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                    Layout
          </a>
                  <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
                    Form
          </a>
                  <hr class="navbar-divider" />
                  <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
                    Elements
          </a>
                  <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                    Components
          </a>
                </div>
              </div>
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <div class="field is-grouped">

                  <p class="control">
                    <a class="button is-primary" href="/">
                      <span class="icon">
                        <i class="fas fa-download"></i>
                      </span>
                      <span>Singup</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div>
          <div>
            <div>
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
                    <input class="input" type="email" placeholder="e.g. benitocamelas@gmail.com" />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Password</label>
                  <div class="control">
                    <input class="input" type="password" placeholder="e.g. password" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div>
                  <button class="button is-small is-success">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
