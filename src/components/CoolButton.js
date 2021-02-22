import 'bulma/css/bulma.css';

const CoolButton = props => {
    return (
    <button className={props.classProperties} type={props.type}>{props.text}</button>
    )

}

export default CoolButton