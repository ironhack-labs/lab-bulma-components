import React from 'react'
import 'bulma/css/bulma.css'

const CoolButton = ({whereTo, styleBulma, myButtonName}) => {
	return (
		<>
			<a href={whereTo} className={styleBulma}>
				{myButtonName}
			</a>
		</>
	)
}

export default CoolButton
