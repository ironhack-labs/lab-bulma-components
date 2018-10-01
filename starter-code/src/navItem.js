import React from "react";

export const NavItem = ({classNavStart, classNavItem, url, textLink}) => {
	return (
		<div className={classNavStart}>
			<a className={classNavItem} href={url}>{textLink}</a>
		</div>
	)
}