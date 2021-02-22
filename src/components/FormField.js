import "bulma/css/bulma.css"
import clsx from "clsx"
import "./FormField.css"

const FormField = ({ label, type, placeholder, className }) => (
  <div className={clsx(className, "field")}>
    <label className="label">{label}</label>
    <div className="control">
      <input className="input" type={type} placeholder={placeholder} />
    </div>
  </div>
)

export default FormField
