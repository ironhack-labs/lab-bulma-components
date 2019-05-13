import React from 'react'

 class FormField extends React.Component {
     render(){
         return(
            <div>
            <div class="field">
              <label class={this.props.label}>{this.props.label}</label>
              <div class="control">
                <input
                  class="input"
                  type={this.props.text}
                  placeholder={this.props.placeholder}
                />
              </div>
            </div>
          </div>

         )
     }
 }
            

            export default FormField
