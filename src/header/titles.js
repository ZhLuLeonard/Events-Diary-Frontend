import React from 'react';
import cls from 'classnames';

export default class Titles extends React.Component {
	render () {
		return (
			<div>
                <h6 className={cls(this.props.className,"firstLine")}> FIND THE MOST LOVED ACTIVITIES </h6>
                <h4 className={cls(this.props.className,"secondLine")}> BLACK CAT </h4>
			</div>
		)
	}
}