import {combineReducers} from 'redux';
import todoReducer from './toDo/todo.reducer'


export default combineReducers({
    todo:todoReducer
})