import React from 'react'

const CoolButton = (props) => {
 console.log(props)

 const classN = {
   isActive: 'is-active',
   isBlack: 'is-black',
   isCentered: 'is-centered',
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
   isWhite: 'is-white',
 }
 // classN es un objeto con todas las palabras correctas que necesitas

 // Aqui creamos una const y miramos: en props existe el className? si es verdad entonces creamos
 // un array que empieza con ese classname(en nuestro caso empezara' con "is-rounded my-class").
 // Si no tiene className crea simplemente un array vacio
 const classProps = props.className ? [props.className] : [];


 // Ahora con Object.keys pillas al objecto props y creas un array de todos los keys de ese objeco.
 // Desde alli haces un forEach y miras: EXISTE classN[element]? (o sea, miras si aparece en la lista),
 // si es verdad entonces en el array creado antes le empujas la palabra correcta de ese key.
 Object.keys(props).forEach(prop => {
   if (classN[prop]) {
     classProps.push(classN[prop])
   }
 })

 // Al final returnas un div con el button string como class MAS el join (asi que una string) con un " ".
 return (
   <div>
     <button className={"button " + classProps.join(' ')}>{props.children}</button>
   </div>

 )
}

export default CoolButton