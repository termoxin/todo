import { writeUserData } from '../assets/firebase'

export const addUser = (name, todos) => {
	return {
		type: 'ADD_USER',
		name: writeUserData(name, {
			id: (+new Date),
			name: name,
			todos
		})
	}
}


