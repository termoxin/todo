import * as firebase from 'firebase'

let nextId = 0;

function addTodo(text,name) {
	++nextId
	firebase.database().ref(`/users/${name}/data/todos/` + nextId).set({
		id: nextId,
		text,
		completed: false,
		name
	});
}

export const addTodoAction = (text,name) => {
	return {
		type: 'ADD_TODO',
		todo: addTodo(text, name)
	}
}
