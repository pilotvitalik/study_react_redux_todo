import { combineReducers } from 'redux';

import todoReducer from './todoSlice';

const rootReducer = combineReducers({
	todo: todoReducer,
})

export default rootReducer;