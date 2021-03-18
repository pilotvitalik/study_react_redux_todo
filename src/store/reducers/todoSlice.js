const initialState = {};

export default function todoReducer(state = initialState, action){
	switch(action.type){
		case 'todo/initListTasks':
			return action.payload;
		default:
			return state;
	}
}

export async function fetchTodos(dispatch, getState){
	dispatch({type:'todo/initListTasks', payload: 55});
}