import React from 'react';
import cls from 'classnames';

export default class Username extends React.Component { 
	constructor(props) {
		super(props);
		this.handleTextChange = this.handleTextChange.bind(this);
	  }

	handleTextChange(e){
		this.props.onChange(e.target.value);
	}

	render () {
		const logoSource = this.props.logo;
		console.log(this.props.value);
		return (
			<div>
				<input
				    className={cls(this.props.className)}
					color = "white"
					placeholder ="User name"
					type="search"
					value = {this.props.value}
					onChange = {this.handleTextChange}
					//onChange={e => this.props.onChange(e.target.value)}
					/>
			</div>
		)
	}
}