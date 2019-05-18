import React, {Fragment} from 'react'
import FormField from './FormField'
import CoolButton from './CoolButton'

export default () => {
  return (
    <div className="container">
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password" />

      <CoolButton isSmall isSuccess className="is-rounded my-class">SignUp</CoolButton>
      {/* <CoolButton isSmall isSuccess>Button 2</CoolButton> */}
    </div>
  )
}