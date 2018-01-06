import React, {Component} from 'react'
import { connect } from 'react-redux'
import addTodo from '../actions/addTodo'
import TodoList from '../components/TodoList'
import Input from '../components/Input'
import Button from '../components/Button'
import { addTodoAction } from '../actions/addTodo'
import { toggleTodo } from '../actions/toggleTodo'
import { deleteTodo } from '../actions/deleteTodo'
import { applyEditingTodo } from '../actions/applyEditingTodo'
import { addUser } from '../actions/addUser'
import { loadTodo } from '../actions/loadTodo'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import IconButton from 'material-ui/IconButton'
import { Route, Link } from 'react-router-dom'
import Enter from '../components/Enter'

class App extends Component {
	constructor(props) {
		super(props)

		this.containerShow = this.containerShow.bind(this)
	}
	render() {
		return(
			<div className="app">
				{this.containerShow()}
			</div>
		);
	}
	containerShow() {
		let {
				onAddTodo, 
				onTodoComplete, 
				todos, 
				onDeleteTodo, 
				onapplyEditingTodo, 
				onaddUser, 
				onloadTodo,
				store
			} = this.props;
		return <div className="container">
				<div>
					<MuiThemeProvider>
						<Input add={onAddTodo}/>
					</MuiThemeProvider>
					<MuiThemeProvider>
						<Button 
							add={onAddTodo} 
							addUser={onaddUser} 
							loadTodo={onloadTodo}
						/>
					</MuiThemeProvider>
				</div>
				<MuiThemeProvider>
					<TodoList 
						todos={todos} 
						onTodoCompleted={onTodoComplete} 
						delete={onDeleteTodo}
						applyEditing={onapplyEditingTodo}
						store={store}
					/>
				</MuiThemeProvider>
			</div>
	}
}

const mapStateToProps = (state) => {
	return {
		todos: state.todos
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onAddTodo: (text,name) => dispatch(addTodoAction(text,name)),
		onTodoComplete: id => dispatch(toggleTodo(id)),
		onDeleteTodo: id => dispatch(deleteTodo(id)),
		onapplyEditingTodo: (text, id, name) => dispatch(applyEditingTodo(text, id, name)),
		onaddUser: (name) => dispatch(addUser(name)),
		onloadTodo: (todos) => dispatch(loadTodo(todos))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App)