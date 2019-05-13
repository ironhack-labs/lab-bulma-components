import React from 'react'
import FormField from './formfield'
import CoolButton from './CoolButton'

class Signup extends React.Component {
    render(){
        return(
            <div>
            <FormField label='Name' type='text' placeholder='e.g Alex Smith' />
            <FormField
              label='e-mail'
              type='e-mail'
              placeholder='alex.smith@gmail.com'
            />
            <FormField label='Password' type='password' placeholder='**********' />
          </div>
        )
    }
}

export default Signup