import * as firebase from 'firebase'

function editingTodo(text, id, name) {
	let updates = {};

	updates[`/users/${name}/data/todos/` + id] = {
		completed: false,
		id,
		name,
		text
	}

	firebase.database().ref().update(updates);
}

export const applyEditingTodo = (text,id, name) => {
	return {
		type: 'APPLY_EDITING_TODO',
		todo: editingTodo(text, id, name)
	}
}