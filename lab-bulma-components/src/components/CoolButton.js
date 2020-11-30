import "./CoolButton.css"
import 'bulma/css/bulma.css'

const CoolButton = props => {
    return (        
        <div className="coolButtons" >
            <button className={props.className}>{props.textButton}</button>
        </div>                 
   )
}

export default CoolButton