import React from 'react';
import cls from 'classnames';

export default class Password extends React.Component {
	render () {
		return (
			<div>
				<input
				    className={cls(this.props.className)}
					color = "white"
					placeholder = "Password"
					type="password"
					maxLength="25"
					value = {this.props.value}
					onChange = {e => this.props.onChange(e.target.value)}
					//onChange={e => this.props.onChange(e.target.value)}
					/>
			</div>
		)
	}
}