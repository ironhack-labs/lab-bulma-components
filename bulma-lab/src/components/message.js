import React from 'react';

export default class Message extends React.Component {

    render() {

        return (

            <div>

                <article class="message is-info ">
                
                    <div class="message-header">
                        <p>Info</p>
                        <button class="delete" aria-label="delete"></button>
                    </div>

                    <div class="message-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, 
                        porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. 
                    </div>
                
                </article>

            </div>

        );

    }

}

