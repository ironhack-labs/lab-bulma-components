import 'bulma/css/bulma.css'
import './CoolButton'
import CoolButton from './CoolButton'

const Navbar = props => {
    return (
        <nav className="navbar is-transparent is-fixed-top">
            <div className="navbar-brand">
                <a className="navbar-item" href={props.logoLink}>
                    <img src={props.logo} alt={props.logoAlt} width="112" height="28" />
                </a>
                <div class="navbar-burger burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>
            </div>
            <div className="navbar-menu" id="navMenu">
                <div className="navbar-start">
                    <a className="navbar-item" href={props.homeLink}>Home</a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped buttons are-small">
            
                            <CoolButton class='is-info button' text='Login' href="#"/>

                            <CoolButton class='is-primary button' text='Signup' href="#"/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Navbar