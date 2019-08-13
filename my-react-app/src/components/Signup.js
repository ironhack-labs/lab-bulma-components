import React from 'react'


const Singup = props => {

    return (
        <div className="col-md-4 card-person">
            <header>
                <FormField label={props.name} type="text" placeholder="e.g Alex Smith" />
                <FormField label={props.email} type="email" placeholder="e.g. alexsmith@gmail.com" />
                <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
                <CoolButton isSmall isSuccess>Button 2</CoolButton>
            </header>

        </div>

    )
}

export default Singup