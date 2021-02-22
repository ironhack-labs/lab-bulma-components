import './CoolButton.css'

const CoolButton = ({ btnName, isSmall, isDanger, isSuccess, isPrimary }) => {

    return (
            <button 
            class={`button my-class ${isSmall && `is-small`} ${isDanger && `is-danger is-rounded`} ${isSuccess && `is-success`} ${isPrimary && `is-primary`}`} 
            >{btnName}</button>
    )

}

export default CoolButton