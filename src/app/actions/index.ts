/**
 * action types
 */

// export const ADD_TODO = 'ADD_TODO';
// export const DELETE_TODO = 'DELETE_TODO';

export enum actionTypes {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO"
}


 /**
  * action creators
  */

export function addTodo(item: string) {
  console.log('item', item);
  return {
    type: actionTypes.ADD_TODO,
    payload: item
  }
}

export function deleteTodo(index: number) {
  return {
    type: actionTypes.DELETE_TODO,
    payload: index
  }
}