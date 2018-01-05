export const loadTodo = todos => {
	return {
		type: 'LOAD_TODO',
		todos
	}
}