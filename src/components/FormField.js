import "bulma/css/bulma.css"
import "./FormField.css"

const FormField = ({ label, type, placeholder }) => (
  <div className="field mt-2">
    <label className="label">{label}</label>
    <div className="control">
      <input className="input" type={type} placeholder={placeholder} />
    </div>
  </div>
)

export default FormField
