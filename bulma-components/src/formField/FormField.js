import './FormField.css'
import 'bulma/css/bulma.css';

const FormField = ({ input1, type, placeholder }) => {
    return (
        <>
            <div className="field">
                <label className="label">{input1}</label>
                <div className="control">
                    <input className="input" type={type} placeholder={placeholder} />
                </div>
            </div>

        </>
    )
}

export default FormField