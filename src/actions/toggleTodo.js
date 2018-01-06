import * as firebase from 'firebase'

function toggle(id, name, status, text) {
	let updates = {};

	updates[`/users/${name}/data/todos/` + id] = {
		completed: !status,
		id,
		name,
		text
	}

	firebase.database().ref().update(updates);
}

export const toggleTodo = (id, name, status, text) => {
	return {
		type: 'TOGGLE_TODO',
		todo: toggle(id, name, status, text)
	}
}