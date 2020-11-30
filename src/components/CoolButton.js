const CoolButton = props => {
    return (
        <button className={props.class} target="_blank" href={props.link} type={props.type}>{props.text}</button>
    )
}

export default CoolButton