import './CoolButton.css'

const CoolButton = ({ typeButton, text }) => {

  return (
    <div class="more">
      <button className={typeButton}>{text}</button>
    </div>
  )
}
export default CoolButton