import React, { Component } from 'react'

class SignUp extends Component {
	render() {
		return (
			<div>
				<br />
				<br />
				<div className='field'>
					<label className='label'>Name</label>
					<div className='control'>
						<input className='input' type='text' placeholder='e.g Alex Smith' />
					</div>
				</div>

				<div className='field'>
					<label className='label'>Email</label>
					<div className='control'>
						<input className='input' type='text' placeholder='alex@gmail.com' />
					</div>
				</div>

				<div className='field'>
					<label className='label'>Password</label>
					<div className='control'>
						<input className='input' type='text' placeholder='XXXXXXXX' />
					</div>
				</div>
				<button className='button is-small is-success'>Submit</button>
			</div>
		)
	}
}
export default SignUp
