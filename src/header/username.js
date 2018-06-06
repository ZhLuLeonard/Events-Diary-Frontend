import React from 'react';
import cls from 'classnames';

export default class Usernames extends React.Component { 
	constructor(props) {
		super(props);;
	  }

	render () {
		const logoSource = this.props.logo;
		//console.log(this.props.value);
		return (
			<div>
				<input
				    className={cls(this.props.className)}
					color = "white"
					placeholder ="User name"
					type="search"
					value = {this.props.value}
					//onChange = {this.props.onChange}
					onChange={e => this.props.onChange(e.target.value)}
					/>
			</div>
		)
	}
}