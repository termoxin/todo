import * as firebase from 'firebase'

function deleteTodoItem(id, name) {
	firebase.database().ref(`/users/${name}/data/todos/${id}`).remove()
}

export const deleteTodo = (id, name) => {
	return {
		type: 'DELETE_TODO',
		todo: deleteTodoItem(id, name)
	}
}

