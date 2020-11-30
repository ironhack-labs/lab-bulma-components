const FormField = ({ size, ...props }) => {
    return (

        <div className="container">
            <div className="columns">
                <div className="column is-half">

                    <div className="field">
                        <label className="label">{props.label}</label>
                        <div className="control">
                            <input className={`input ${size}`} type={props.type} placeholder={props.placeholder} />
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default FormField