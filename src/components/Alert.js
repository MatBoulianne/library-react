import React from 'react';

class Alert extends React.Component {
	getStyle = () => {
		return {
			display: this.props.display,
			backgroundColor: this.props.bgColor,
		  	width: '30%',
		  	margin: '2rem auto',
		  	padding: '.5rem 0',
		  	borderRadius: '5px',
		  	textAlign: 'center',
		  	color: 'white',
		  	fontWeight: 'bold'
		}
	}

	render() {
		return (
			<div className='alert' style={this.getStyle()}>{this.props.text}</div>
		);
	}
}

export default Alert;