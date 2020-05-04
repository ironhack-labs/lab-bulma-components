import React from 'react'
import 'bulma/css/bulma.css'

const Message = ({ classBulma, title, content }) => {
	return (
		<>
            <article className={ classBulma }>

                <div className="message-header">
                    <p>{ title }</p>
                    <button className="delete" aria-label="delete"></button>
                </div>

                <div className="message-body">
                    <p>{ content }</p>
                </div>

            </article>
		</>
	)
}

export default Message
