import axios from 'axios';

const initialState = {
	listTasks:[],
};

export default function todoReducer(state = initialState, action){
	switch(action.type){
		case 'todo/initListTasks':
			return {
				...state,
				listTasks: [
					...state.listTasks,
					action.payload
				]
			}
		default:
			return state;
	}
}

// export async function fetchTodos(dispatch, getState){
// 	dispatch({type:'todo/initListTasks', payload: 55});
// }

export async function fetchTodos(dispatch, getState){
	axios.post('http://127.0.0.1:3030/')
		.then(res => {
			const data = res.data;
			dispatch({type: 'todo/initListTasks', payload: data});
		})
		.catch(err => console.log(err))
}