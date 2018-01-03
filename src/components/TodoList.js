import React, {Component} from 'react'
import {List, ListItem} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import ContentEdit from 'material-ui/svg-icons/editor/mode-edit';
import TextField from 'material-ui/TextField';

class TodoList extends Component {
	handleEdit(bool, text="", id) {
		if(bool) {
			return <TextField
				id="text-field-editing"
				defaultValue={text}
				onKeyUp={(e) => { 
					if(e.keyCode === 13) {
						this.props.applyEditing(e.target.value, id);
					}
				}}
			/>
		}
	}
	render() {
		let style = {textDecoration: 'line-through'}
		let visible = this.props.todos.map((todo,index) => (
			    	<div>
				    	<ListItem 
					    	key={todo.id} 
					    	primaryText={todo.text} 
					    	onClick={() => {this.props.onTodoCompleted(todo.id) }}
					    	style={todo.completed ? style : null}
				    	/> 
				    	{this.handleEdit(todo.isEdit, todo.text, todo.id)}
				    	<FloatingActionButton className="control-button" secondary={true} mini={true}>
							<ContentRemove onClick={() => {this.props.delete(todo.id)}}/>
						</FloatingActionButton>
						<FloatingActionButton class="control-button" mini={true}>
							<ContentEdit onClick={() => {this.props.edit(todo.id)}} />
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