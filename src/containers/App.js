import React, {Component} from 'react'
import { connect } from 'react-redux'
import addTodo from '../actions/addTodo'
import TodoList from '../components/TodoList'
import Input from '../components/Input'
import Button from '../components/Button'
import { addTodoAction } from '../actions/addTodo'
import { toggleTodo } from '../actions/toggleTodo'
import { deleteTodo } from '../actions/deleteTodo'
import { editTodo } from '../actions/editTodo'
import { applyEditingTodo } from '../actions/applyEditingTodo'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import IconButton from 'material-ui/IconButton';

class App extends Component {
	render() {
		let {onAddTodo, onTodoComplete, todos, onDeleteTodo, onEditTodo, onapplyEditingTodo} = this.props;
		return(
			<div className="container">
				<div>
					<MuiThemeProvider>
						<Input add={onAddTodo}/>
					</MuiThemeProvider>
					<MuiThemeProvider>
						<Button add={onAddTodo} />
					</MuiThemeProvider>
				</div>
				<MuiThemeProvider>
					<TodoList 
						todos={todos} 
						onTodoCompleted={onTodoComplete} 
						delete={onDeleteTodo}
						edit={onEditTodo}
						applyEditing={onapplyEditingTodo}
					/>
				</MuiThemeProvider>

			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		todos: state.todos
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onAddTodo: text => dispatch(addTodoAction(text)),
		onTodoComplete: id => dispatch(toggleTodo(id)),
		onDeleteTodo: id => dispatch(deleteTodo(id)),
		onEditTodo: id => dispatch(editTodo(id)),
		onapplyEditingTodo: (text,id) => dispatch(applyEditingTodo(text, id))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App)