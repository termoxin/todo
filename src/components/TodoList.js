import React, {Component} from 'react'
import {List, ListItem} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import ContentEdit from 'material-ui/svg-icons/editor/mode-edit';
import TextField from 'material-ui/TextField';

class TodoList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isEditing: false
		}

		this.handleEdit = this.handleEdit.bind(this)
	}
	handleEdit(bool, text="", id) {
		if(bool) {
			return <TextField
				id="text-field-editing"
				defaultValue={text}
				onKeyUp={(e) => { 
					if(e.keyCode === 13) {
						this.setState({
							isEditing: false
						})
						this.props.applyEditing(e.target.value, id, this.props.store.getState().todos[1].name);
					}
				}}
			/>
		}
	}
	render() {
		let style = {textDecoration: 'line-through'}
		let visible = this.props.todos.map((todo) => (
			    	<div>
				    	<ListItem 
					    	key={todo.index} 
					    	primaryText={todo.text} 
					    	onClick={() => {this.props.onTodoCompleted(todo.id) }}
					    	style={todo.completed ? style : null}
				    	/> 
				    	{this.handleEdit(this.state.isEditing, todo.text, todo.id)}
				    	<FloatingActionButton className="control-button" secondary={true} mini={true}>
							<ContentRemove onClick={() => {this.props.delete(todo.id)}}/>
						</FloatingActionButton>
						<FloatingActionButton className="control-button" mini={true}>
							<ContentEdit onClick={() => {
								this.setState({
									isEditing: !this.state.isEditing
								})
							}} />
						</FloatingActionButton>
			    	</div>
			    ))


		return(
			<List>
			   {visible}
 			</List>
		)
	}
}

export default TodoList