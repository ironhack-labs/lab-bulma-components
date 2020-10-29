import bulmaStyleTypes from '../enums/bulmaStyleTypes.enum';

const mountClassStringFromProps = (props) => {

        let returnClasses = props.className ? props.className : '';

        const propNames = Object.keys(props);

        propNames.forEach(name => {
            if(bulmaStyleTypes[name]) {
                returnClasses += ` ${bulmaStyleTypes[name]}`;
            }
        });

        return returnClasses;

};

export default mountClassStringFromProps;