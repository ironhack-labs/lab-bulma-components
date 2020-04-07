import React from 'react'
import 'bulma/css/bulma.css';
const CoolButton = (props) => {
  const { isSmall, isDanger, className, isSuccess, isInfo, isPrimary, children } = props
  const classNameString = `
button
${className}
${isSmall ? 'is-small' : ''}
${isDanger ? 'is-danger' : ''}
${isSuccess ? 'is-success' : ''}
${isInfo ? 'is-info' : ''}
${isPrimary ? 'is-primary' : ''}
`
  return (
    <div>
      <button className={classNameString}>{children}</button>
    </div>
  )
}
export default CoolButton;