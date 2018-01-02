const todos = (state = [], action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false,
					isEdit: false
				}
			]
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
			return state.map(todo =>
				(todo.id === action.id)
				? {...todo, text: action.text, isEdit: false}
				: todo
		)

		default: 
			return state
	}
}

export default todos