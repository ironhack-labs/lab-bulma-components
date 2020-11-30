const FormField = props => {
    return (
        <>
         <div className="field">
                <label className="label">{props.label}</label>
            <div className="control">
                <input className="input" type={props.type} placeholder={props.placeholder} />
            </div>
            </div>
            
        {/* <div className="field">
            <label className="label">Email</label>
            <div className="control">
                <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
            </div>
        </div> */}
        </>
    )
}
export default FormField