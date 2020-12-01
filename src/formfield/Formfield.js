import React from 'react'
import 'bulma/css/bulma.css'
import './Formfield.css'

const Formfield = props => {

    return (
        <form class="form1">
            <div className='field'>
                <label className='label'>{props.label}</label>
                    <div class="control1">
                        <input class="input" type={props.type} placeholder={props.placeholder} />
                    </div>
            </div>
        </form>
  )
}

export default Formfield