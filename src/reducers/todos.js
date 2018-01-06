const todos = (state = [], action) => {
	switch(action.type) {
		case 'ADD_TODO':
		console.log(action.todo)
			return state
		case 'TOGGLE_TODO':
			return state.map(todo => 
				(todo.id === action.id)
				? {...todo, completed: !todo.completed}
				: todo
			)
		case 'DELETE_TODO':
			return state.filter(todo =>
			todo.id !== action.id
		)
			
		case 'EDIT_TODO': 
			return state.map(todo => 
				(todo.id === action.id)
				? {...todo, isEdit: !todo.isEdit}
				: todo
		)
		case 'APPLY_EDITING_TODO': 
			return state
			
		case 'ADD_USER':
			return state

		case 'LOAD_TODO':
			return action.todos.data.todos

		default: 
			return state
	}
}

export default todos