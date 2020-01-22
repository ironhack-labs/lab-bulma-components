import React from 'react';
import PropTypes from 'prop-types'


// const CoolButton = () =>{
// return(
//   <div>
//   <div class="field is-grouped">
//   <p class="control">
//     <button class="button is-link">
//       Button 1
//     </button>
//   </p>
//   <p class="control">
//     <button class="button">
//       Button 2
//     </button>
//   </p>
// </div>
//   </div>
// )}



const Button = ({ primary, secondary}) => <RaisedButton
  label={label}
  primary={primary}
  secondary={secondary}
 />

const { string, bool, func } = PropTypes

Button.propTypes = {
  primary:   <p class="control">
  <button class="button is-link">
    Button 1
  </button>
</p>
  secondary:  <p class="control">
  <button class="button">
    Button 2
  </button>
</p>
}

export default CoolButton ;