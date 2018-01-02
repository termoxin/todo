let nextId = 0;

export const addTodoAction = text => {
	return {
		type: 'ADD_TODO',
		id: nextId++,
		text
	}
}