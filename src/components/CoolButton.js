import { props } from "bluebird"

const CoolButton = props => {
    return <button type={props.type} className={props.class}>{props.name}</button>
}

export default CoolButton