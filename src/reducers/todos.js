const todos = (state = [], action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return state
		case 'TOGGLE_TODO':
			return state
		case 'DELETE_TODO':
			return state.filter(todo =>
			todo.id !== action.id
		)
			
		case 'EDIT_TODO': 
			return state
		
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