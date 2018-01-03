import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

class Button extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			open: false
		}

		this.handleClick = this.handleClick.bind(this)
		this.handleClose = this.handleClose.bind(this)
	}
	handleClick(e) {
		if(!inputAdd.value.trim() || inputAdd.value.length < 6) {
			this.setState({
				open: true
			});
		} else {
			let value = inputAdd.value;
			this.props.add(value);
			inputAdd.value = '';
		}
	}
	handleClose() {
		this.setState({
			open: false
		});
	}
	render() {
		return(
			<div>
				<RaisedButton 
					label="Add" 
					onClick={this.handleClick} 
					primary={true} 
					className="button" 
				/>
				<Dialog
		          title="You did not enter the title of the note, or the note is very short."
		          modal={false}
		          open={this.state.open}
		          onRequestClose={this.handleClose}
		        />
			</div>
		);
	}
}

export default Button


