import React from 'react'
import 'bulma/css/bulma.css'

const Formfield = props => {

    return (
        <form>
            <div className='field'>
                <label className='label'>{props.label}</label>
                    <div class="control">
                        <input class="input" type={props.type} placeholder={props.placeholder} />
                    </div>
            </div>
        </form>
  )
}

export default Formfield