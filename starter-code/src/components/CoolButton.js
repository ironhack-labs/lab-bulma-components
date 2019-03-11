import React from 'react';
import { Button } from 'antd';

const CoolButton = (props) =>{
    return(
        <div>
            <Button type={props.type}>{props.name}</Button>
        </div>
    )
};

export default CoolButton;