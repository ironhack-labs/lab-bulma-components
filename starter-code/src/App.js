import React, { Component } from 'react'
import Nav from '../components/nav'
import Form from '../components/FormField'
import CoolButton from '../components/CoolButton'
import '../public/css/bulma.min.css'


class App extends Component {

    render() {
        const nav = {
            logo: 'img/bulma-logo.png',
            menu: [
                {
                    title: 'Home',
                    url: '/'
                }
            ],
            login: 'Login',
            signup: 'Signup',
            btnClass: ['button is-rounded my-class is-danger is-small', 'button is-small is-success']
        }

        const form = {
            label: ['Name', 'Email'],
            type: ['text', 'email'],
            placeholder: ['e.g Alex Smith', 'e.g. alexsmith@gmail.com']
        }
        const button = {
            name: ['Button 1', 'Button 2'],
            btnClass: ['button is-rounded my-class is-danger is-small', 'button is-small is-success']
        }
        return (

            <div>
                <Nav logo={nav.logo} menuTitle={nav.menu[0].title} menuUrl={nav.menu[0].url} login={nav.login} btnLogin={nav.btnClass[0]} signup={nav.signup} btnSignup={nav.btnClass[1]} />
                <form>
                    <Form label={form.label[0]} type={form.type[0]} placeholder={form.placeholder[0]} />
                    <Form label={form.label[1]} type={form.type[1]} placeholder={form.placeholder[1]} />
                </form>
                <div>
                    <CoolButton btnClass={button.btnClass[0]} name={button.name[0]} />
                    <CoolButton btnClass={button.btnClass[1]} name={button.name[1]} />
                </div>
            </div>

        )
    }

}


export default App