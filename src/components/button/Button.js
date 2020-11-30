import './Button.css'
import bulmaClasses from './BulmaClasses'

const CoolButton = props => {
  // let className = bulmaClasses.props
  return (
    <button className={props.className}>{props.text}</button>
  )
}

export default CoolButton