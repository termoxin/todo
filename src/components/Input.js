import React from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

class Input extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			open: false
		}

		this.handleKeyUp = this.handleKeyUp.bind(this)
		this.handleClose = this.handleClose.bind(this)
	}
	handleKeyUp(e) {
		if(e.keyCode === 13) {
			let value = inputAdd.value;
			if(!value.trim() || value.length <= 6) {
				this.setState({
					open: true
				})
			} else {
				this.props.add(value);
				inputAdd.value = '';
			}
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
				<TextField id="inputAdd" onKeyUp={this.handleKeyUp}/>
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

export default Input