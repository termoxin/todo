import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import allReducers from './reducers/index'
import App from './containers/App'
import style from './assets/style.css'
import { readUserData } from './assets/firebase'

const store = createStore(allReducers);

ReactDOM.render(
	<Provider store={store}>
		<App style={style} />
	</Provider>,
	document.getElementById('root')
);

