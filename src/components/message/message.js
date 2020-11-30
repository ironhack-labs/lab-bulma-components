const Message = props => {
    return (
        <div className="container">
            <div className="columns">
                <div className={`column is-half ${props.justify}`}>

                    <article className={`message ${props.color}`}>

                        <div className="message-header">
                            <p>{props.title}</p>
                            <button className="delete" aria-label="delete"></button>
                        </div>
                        <div className="message-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>
                        </div>

                    </article>

                </div>
            </div >
        </div >
    )
}

export default Message