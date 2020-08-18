import types from './todo.types';

export const addToDo = (todo) => {
    return {
        type: types.ADD_TO_DO,
        payload: todo
    }
}

export const editToDo = (todo) => {
    return {
        type: types.EDIT_TO_DO,
        payload: todo
    }
}
export const deleteToDo = (todoID) => {
    return {
        type: types.DELETE_TO_DO,
        payload: todoID
    }
}
export const toggleToDoCheckItemStatus = (todoID , itemId) => {
    return {
        type: types.TOGGLE_CHECK_ITEM_TODO,
        payload: {todoID , itemId}
    }
}