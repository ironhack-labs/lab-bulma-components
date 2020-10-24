import bulmaClasses from './bulmaClasses';

const returnClassNames = (props) => Object.keys(props)
    .filter(prop => Object.keys(bulmaClasses).includes(prop))
    .map(prop => bulmaClasses[prop])
    .join(' ');

    export default returnClassNames;