import React from 'react';
import cls from 'classnames';

export default class Password extends React.Component {
	render () {
        const logoSource = this.props.logo;
		return (
			<div>
				<input
				    className={cls(this.props.className)}
					color = "white"
					placeholder = "Password"
					type="search"
					value = {this.props.value}
					onChange = {e => this.props.onChange(e.target.value)}
					//onChange={e => this.props.onChange(e.target.value)}
					/>
			</div>
		)
	}
}