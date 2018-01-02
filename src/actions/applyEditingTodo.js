

export const applyEditingTodo = (text,id) => {
	return {
		type: 'APPLY_EDITING_TODO',
		text,
		id
	}
}