import styleModifiers from '../enums/bulmaStyleModifiers.enum';

const mountClass = (props) => {
  let returnClasses = props.className ? props.className : '';

  const propNames = Object.keys(props);

  propNames.forEach((name) => {
    if (styleModifiers[name]) {
      returnClasses += ` ${styleModifiers[name]}`;
    }
  });

  return returnClasses;
};

export default mountClass;
