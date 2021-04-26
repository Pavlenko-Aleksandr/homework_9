export const ACTION_DELETE_TODO = 'ACTION_DELETE_TODO';
export const ACTION_CREATE_TODO = 'ACTION_CREATE_TODO';
export const ACTION_UPDATE_TODO = 'ACTION_UPDATE_TODO';

export function deleteTodo(id) {
    return { type: ACTION_DELETE_TODO, payload: id };
}
export function createTodo(newItem) {
    return { type: ACTION_CREATE_TODO, payload: newItem };
}
export function updateTodo(newItem) {
    return { type: ACTION_UPDATE_TODO, payload: newItem };
}