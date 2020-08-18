import { createSelector } from 'reselect';

const toDoList = state => state.todo.toDoList;

export const toDoId = createSelector(
    toDoList,
    (items)=> items.length + 1
)
