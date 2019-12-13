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
  return {
    type: actionTypes.ADD_TODO,
    item
  }
}

export function deleteTodo(index: number) {
  return {
    type: actionTypes.DELETE_TODO,
    index
  }
}