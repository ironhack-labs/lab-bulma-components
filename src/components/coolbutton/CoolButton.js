import 'bulma/css/bulma.css'

const CoolButton = props => {

    return (
            <button className={props.class}>{props.name}</button>
    )
}

export default CoolButton