import React from 'react'

const Formfield = () =>{
    return (
        <div className="columns is-mobile is-centered">
            <form className="column is-one-third">
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="e.g Michu Goga"/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="email" placeholder="e.g. michu_goga@gmail.com"/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className="input" type="password" placeholder="e.g. ChilaquilesXXX"/>
                    </div>
                </div>


            </form>
        </div>
    )
}

export default Formfield