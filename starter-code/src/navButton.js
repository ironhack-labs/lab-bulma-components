import React from "react";

export const NavButton = ({classControl, btnClasses, target, url, navBtnText}) => {

	return (
		<p className={classControl}>
			<a className={btnClasses} target={target} href={url}>{navBtnText}</a>
		</p>
	)
}