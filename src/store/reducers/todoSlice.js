import axios from 'axios';

const initialState = {
	listTasks:[],
};

export default function todoReducer(state = initialState, action){
	switch(action.type){
		case 'todo/initListTasks':
			return {
				listTasks: action.payload
			}
		case 'todo/updateColorLocal':
			return {
				...state,
				listTasks: state.listTasks.map(task => {
					if ('color_' + task.name === action.payload.name){
						console.log('Урааа')
						return { 
							...task, 
							color_item: action.payload.val,
							color: action.payload.val.toLowerCase(),
						}
					} else {
						return task;
					}
				})
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
			dispatch({type: 'todo/initListTasks', payload: data.list_tasks});
		})
		.catch(err => console.log(err))
}