import React, {Component} from 'react';
import NavBar     from './NavBar';
import FormField  from './FormField';
import CoolButton from './CoolButton';
import Message    from './Message';

class Signup extends Component {
  state = {
    button:     'button',
    isActive:   'is-active',
    isBlack:    'is-black',
    isCentered: 'is-centered',
    isDanger:   'is-danger',
    isDark:     'is-dark',
    isFocused:  'is-focused',
    isGrouped:  'is-grouped',
    isHovered:  'is-hovered',
    isInfo:     'is-info',
    isInverted: 'is-inverted',
    isLarge:    'is-large',
    isLight:    'is-light',
    isLink:     'is-link',
    isLoading:  'is-loading',
    isMedium:   'is-medium',
    isOutlined: 'is-outlined',
    isPrimary:  'is-primary',
    isRight:    'is-right',
    isRounded:  'is-rounded',
    isSelected: 'is-selected',
    isSmall:    'is-small',
    isStatic:   'is-static',
    isSuccess:  'is-success',
    isText:     'is-text',
    isWarning:  'is-warning',
    isWhite:    'is-white'
  }

  render() {
    const {state, props} = this,
          login          = `${state.button} ${state.isLink}`,
          signup         = `${state.button} ${state.isPrimary}`,
          submit         = `${state.button} ${state.isPrimary}`,
          message        = `message ${state.isInfo}`;

    return (
      <div>
        <NavBar login={login} signup={signup} />
        <main className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-half is-offset-one-quarter">
                <form action="/">
                  <FormField label="Name"     type="text"     placeholder="e.g Alex Smith" />
                  <FormField label="Email"    type="email"    placeholder="e.g. alexsmith@gmail.com" />
                  <FormField label="Password" type="password" placeholder="••••••••" />
                  <CoolButton className={submit}>Signup</CoolButton>
                </form>
                <Message title="Hello World" className={message}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
                </Message>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
};

export default Signup;