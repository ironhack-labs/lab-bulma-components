import React from 'react';
import 'bulma/css/bulma.css';


export default function CoolButton() {
    return (
        <div>
            <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
            <CoolButton isSmall isSuccess>Button 2</CoolButton>
        </div>
    )
}
