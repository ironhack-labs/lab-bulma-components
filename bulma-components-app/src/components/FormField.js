import "bulma/css/bulma.css";

const FormField = (props) => {
  return (
    <form>
      <div className="field">
        <label className="label">{props.label}</label>
      </div>
        
      <div className="control">
        <input className="input" type={props.type} placeholder={props.placeholder} /*style={{ width: 50% }}*/ />
      </div>
    </form>

    
  );
};

export default FormField;
