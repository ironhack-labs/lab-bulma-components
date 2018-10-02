import React from "react";

export const NavButton = ({btnStyle, target, url, navBtnText}) => {

	return (
		<p className="control">
			<a className={`button ${btnStyle}`} target="_blank" href="#">{navBtnText}</a>
		</p>
	)
}