import React, { Fragment } from 'react';

const FormField = (props) => {
  return (
    <Fragment>
      <div class="field">
        <label class="label">{props.label}</label>
        <div class="control">
          <input class="input" type={props.type} placeholder={props.placeholder} />
        </div>
      </div>
    </Fragment>
  )
}
export default FormField;