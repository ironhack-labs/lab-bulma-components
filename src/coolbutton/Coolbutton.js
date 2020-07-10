import React, {Component} from "react";

class Coolbutton extends Component {
	render() {
		return (
			<button type="submit" className={this.props.class}>
				{this.props.cta}
			</button>
		);
	}
}

export default Coolbutton;
