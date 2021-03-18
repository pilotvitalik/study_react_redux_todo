import todoReducer from './todoSlice';

export default function rootReducer(state = {}, action){
	return{
		todo: todoReducer(state, action),
	}
}