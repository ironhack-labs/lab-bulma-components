import './Container.css'

const Container = props => {
  return (
    <div className='container is-max-desktop'>
        <p>{props.content}</p>
    </div>
  )
}

export default Container