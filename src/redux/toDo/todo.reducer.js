import types from './todo.types'
const initial_state =
{
    toDoList: [
        {
            id: 1,
            title: 'to do 1',
            text: 'this is a check list for shop',
            checkList: [
                { id: 1, text: 'first job', status: false },
                { id: 2, text: 'second job', status: false }
            ]
        },
        {
            id: 2,
            title: 'to do 2',
            text: 'this is amother check list for maktab',
            checkList: [
                { id: 1, text: 'first job maktab', status: true },
                { id: 2, text: 'second job maktab', status: false }
            ]
        }
    ]
}
const todoReducer = (state = initial_state, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.ADD_TO_DO:
            return {
                ...state,
                toDoList: [...state.toDoList, payload]
            }
        case types.EDIT_TO_DO:
            return {
                ...state,
                toDoList: state.toDoList.map(item => item.id == payload.id ? payload : item)
            }
        case types.DELETE_TO_DO:
            return {
                ...state,
                toDoList: state.toDoList.filter(item => item.id !== payload)
            }
        case types.TOGGLE_CHECK_ITEM_TODO:
            return {
                ...state,
                toDoList: state.toDoList.map(item => item.id == payload.todoID ?
                    {
                        ...item, checkList: item.checkList.map(checkItem => checkItem.id == payload.itemId ?
                            { ...checkItem, status: !checkItem.status } : checkItem)
                    } : item)
            }
        default:
            return state
    }
}
export default todoReducer;
