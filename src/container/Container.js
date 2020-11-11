import React from "react";
import Signup from "../signup/Signup";
import Message from "../message/Message";

function Container(){
    return(

        <div className="container">
                    <Message title="Teste Cx Messagem" message="Teste do componente de caixa de mensagem!"/>

            <Signup />
        </div>
    )
}

export default Container;