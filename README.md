![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | React Bulma Components

## Introduction

Do you know [Bulma](https://bulma.io/), a very nice alternative to Bootstrap as a CSS framework? We are going to create a simple website with Bulma and React!

## Setup

- Fork this repo
- Clone this repo
- Open the LAB and start:

  ```bash
  $ cd lab-bulma-components
  $ npm install
  $ npm start
  ```

## Submission

- Upon completion, run the following commands:

  ```bash
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create a Pull Request so that your TAs can check your work.

## Getting Started

Clean the `App.js` component so that it has the following structure:

```jsx
// src/App.js
import "./App.css";

function App() {
  return <div className="App"></div>;
}
export default App;
```

### Bulma installation

To get Bulma, install the npm package:

```
$ npm install bulma
```

You will have to import Bulma CSS in every component that will use it. You can do it with the following line:

```javascript
import "bulma/css/bulma.css";
```

## Instructions

### Iteration 1 | `Navbar` component

To kick-off, create a new folder `src/components/` and inside it create two files:

- `src/components/Navbar.js` and
- `src/components/Navbar.css`.

<br>

This component should display a link to "Home", "Login" and "Signup" like in the following example:

![](https://i.imgur.com/dMaNMeM.png)

To help you, you can use the code from the [Bulma Transparent Navbar](https://bulma.io/documentation/components/navbar/#transparent-navbar).

In the end, import the component and render it in the src/App.js.

<br>

### Iteration 2 | `FormField` component

Following the previous example, inside the folder `src/components/` create two new files:

- `src/components/FormField.js` and

- `src/components/FormField.css`.

Your task is to create a new component `FormField`. We want the component to be reusable and allow us to create custom inputs. The component should be customizable through props. You should set the **label**, **type**, and **placeholder** of the input based on the props.

<br>

Once ready, we will use the component in the following way:

```jsx
// JSX version
<FormField label="Name" type="text" placeholder="e.g Alex Smith" />

<FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
```

The above component instances should render the following content in the DOM:

```html
<!-- What should rendered in the DOM -->
<div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="e.g Alex Smith" />
  </div>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control">
    <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
  </div>
</div>
```

Which should be visually displayed in the following way:

![](https://i.imgur.com/8sKyKxI.png)

The tag `label` and the input attributes `type` and `placeholder` should be set with the values coming from the props. After you've finished creating the component, import it and render it in App.js.

If you get stuck, feel free to check the hint provided below.

<details>

<summary>Hint</summary>

```jsx
function FormField(props) {
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      {/* some other code goes here */}
    </div>
  );
}
```

</details>

<br>

### Iteration 3 | Signup Form Component

In the `src/components/` folder, create a new component `SignupForm.js` that contains:

- A `Navbar`

- A `<form>` with

  - A `FormField` for name

  - A `FormField` for email

  - A `FormField` for password

  - A button for submitting the form

When you finish creating the `SignupForm` component, render it in `App.js`.

<br>

### Iteration 4 | `CoolButton` Component

Go ahead and create a new component `CoolButton.js` in the `src/components/` folder.

The goal of this iteration is to create a component called `CoolButton`. The component will render a `<button>` styled with the Bulma button classes.

When finished, the component will be used like this:

```jsx
// JSX version
<CoolButton isSuccess >Button 1</CoolButton>

<CoolButton> Button 2 </CoolButton>
```

The above should render the following content in the DOM:

```html
<!-- What is rendered in the DOM -->
<button class="button is-success">Button 1</button>

<button class="button">Button 2</button>
```

Which should be visually displayed in the following way:

![CoolButton content - Example](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-bulma-buttons-1.png)

If the `isSuccess` prop was passed you need to _convert_ it into a className for the button. You can check Bulma's documentation for the list of _button_ class names: https://bulma.io/documentation/elements/button.

Props without the value like `isSuccess`, are known as **props that default to true**. You can check more about it [here](https://reactjs.org/docs/jsx-in-depth.html#props-default-to-true).

Do you need a hint on how to access the value passed between the component's opening and the closing tag? Take a look at [React - props.children](https://reactjs.org/docs/glossary.html#propschildren).

When finished, update your `Navbar` component to use the `CoolButton` component for the "Login" and "Signup" buttons.

<br>

### Iteration 5 | Bonus

Update the `CoolButton` component so that it can be styled dynamically through props.

You should convert the component's props into Bulma class names and set them as the button's `className`.

Use the following object of values which maps props names to Bulma class names.

```js
{
// prop name:  bulma class name
  isCentered: 'is-centered',
  isActive: 'is-active',
  isBlack: 'is-black',
  isDanger: 'is-danger',
  isDark: 'is-dark',
  isFocused: 'is-focused',
  isGrouped: 'is-grouped',
  isHovered: 'is-hovered',
  isInfo: 'is-info',
  isInverted: 'is-inverted',
  isLarge: 'is-large',
  isLight: 'is-light',
  isLink: 'is-link',
  isLoading: 'is-loading',
  isMedium: 'is-medium',
  isOutlined: 'is-outlined',
  isPrimary: 'is-primary',
  isRight: 'is-right',
  isRounded: 'is-rounded',
  isSelected: 'is-selected',
  isSmall: 'is-small',
  isStatic: 'is-static',
  isSuccess: 'is-success',
  isText: 'is-text',
  isWarning: 'is-warning',
  isWhite: 'is-white'
}
```

When finished, the component will be used like this:

```jsx
// JSX version
<CoolButton isSmall isDanger isRounded>Button 1</CoolButton>

<CoolButton isSmall isSuccess>Button 2</CoolButton>
```

The above should render the following content in the DOM:

```html
<!-- What is rendered in the DOM -->
<button class="button is-small is-danger is-rounded ">Button 1</button>

<button class="button is-small is-success">Button 2</button>
```

Which should be visually displayed in the following way:

![Dynamic CoolButton - Example](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-bulma-buttons-2.png)

<br>

### Iteration 6 | Bonus

As a bonus task, create a `Message` component. You can find the documentation on Bulma's website: https://bulma.io/documentation/components/message/.

The component will be used like this:

```jsx
// JSX version
<Message isInfo title="Hello World">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
  <strong>Pellentesque risus mi</strong>.
</Message>
```

Expected result:

![](https://i.imgur.com/qmD2Nkb.png)

Happy coding! :heart:
