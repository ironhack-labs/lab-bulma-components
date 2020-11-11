import React from "react";
import Signup from "../signup/Signup";
import Message from "../message/Message";

function Container(){
    return(

        <div className="container">
            <Message title="Teste Cx Messagem" isDanger>
                Teste do componente de caixa de mensagem!
            </Message>
            <Signup />
        </div>
    )
}

export default Container;