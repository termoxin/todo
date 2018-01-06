import React from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField';
import { readUserData } from '../assets/firebase'
import firebase from 'firebase'

class Button extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			open: false,
			login: false,
			user: null
		}

		this.handleClick = this.handleClick.bind(this)
		this.handleClose = this.handleClose.bind(this)
		this.handleAddUser = this.handleAddUser.bind(this)
	}
	handleClick(e) {
		if(!inputAdd.value.trim() || inputAdd.value.length < 6) {
			this.setState({
				open: true
			});
		} else {
			let value = inputAdd.value;
			this.props.add(value, this.state.user);
			inputAdd.value = '';
		}
	}
	handleClose() {
		this.setState({
			open: false
		});
	}
	handleAddUser(e) {
		let name = e.target.value;

		if(e.keyCode === 13) {

			this.setState({
				login: true,
				user: name
			})

			readUserData(name, function(data){
				this.props.addUser(this.state.user, data)
			});


		}
	}
	componentDidMount() {
		setInterval(() => {
			firebase.database().ref(`/users/${this.state.user}`).once('value').then((snaptshot) => {
        		this.props.loadTodo(snaptshot.val())
   			});
   		},1500)
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
		        <div>
			        <Dialog
			          title="Sign in to your account."
			          modal={true}
			          open={!this.state.login}
			          onRequestClose={this.handleClose}
			        >
			          Enter your name
			          <TextField
					      id="text-field-login"
					      onKeyUp={this.handleAddUser}
					   /><br />
			        </Dialog>
		      </div>
			</div>
		);
	}
}

export default Button


