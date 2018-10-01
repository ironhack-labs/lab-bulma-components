import React from "react";

export const NavLink = ({classNavStart, classNavItem, url, textLink}) => {
	return (
		<div className={classNavStart}>
			<a className={classNavItem} href={url}>{textLink}</a>
		</div>
	)
}