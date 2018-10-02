import React from 'react'


const Form = () =>{
    return (
        <div>
            <form>
            <div class="field">
                <label class="label">Nombre</label>
                <div class="control">
                    <input label="Name" type="text" placeholder="  tu nombre " />
                </div>
            </div>


            <div class="field">
                <label class="label">Correo</label>
                <div class="control">
                    <input label="Email" type="email" placeholder=" tucorreo@mail.com" />
                </div>
            </div>


            
            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input label="Password" type="password" placeholder="Password" />
                </div>
            </div>
            </form>
        </div>
    )
}


export default Form
