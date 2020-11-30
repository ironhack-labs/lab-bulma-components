import 'bulma/css/bulma.css';

const Message = props => {

    return (
        <div className={props.class} title= {props.title}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong></p> 
        </div>
    )
}

export default Message