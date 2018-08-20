# Lab issues

Hi, my name is Jose Carlos I'm TA at Ironhack Mex, we had a lot of troubles with this lab.

the first one was creating the couple buttons. Bulma doesn't have build-ready react components to render.

```js
<!-- JSX version -->
<Button isSmall isDanger className="is-rounded my-class">Button 1</Button>
<Button isSmall isSuccess>Button 2</Button>
```

> The result: 
> ![](https://s8.postimg.cc/6m8dbyy39/error1.png)

Once you get that error message, you try the second example and you get a couple of buttons with bulma styles applied.

but the students' thinking is:

* is this correct because it worked?
* Do I need to just put the classes in a className attribute and it works?

This only generates confusion and questions, styles library or components library?. What is the goal of the lab? to teach the use of className as a substitute for class within jsx or to teach how to use component libraries?

---

it's necessary a third party library with built in components that really give us a react component to render, example: 

```js
import { Button } from ' some-react-bulma-components-library'
```

Otherwise we will confuse students believing that react magically draws beautifully buttons from zero.

for the rest of the lab it's almost the same, we don't have that components or import them from anywhere, for my part I found this library called [react-bulma-components](https://github.com/couds/react-bulma-components).

It is good but it's difficult to read, it makes use of HOC (high order components) in some examples and even uses the status or properties (something that up to this point should not be introduced according to the program).

then I suggest:

* Use a real components library like [Material-UI](https://material-ui.com/), [react-materialize](https://react-materialize.github.io/#/) or [ant design](https://ant.design/).

* take a time to explain what is a components library and how to import a wanted component like a button or a navbar.

* Show an example of how the result should look.