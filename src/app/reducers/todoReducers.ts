import { actionTypes } from '../actions/';
import { Action } from 'redux';

interface ITodoModel {
  count: number;
  list: string[];
}

export const initialState: ITodoModel = {
  count: 2,
  list: ['list1', 'list2']
};

export const todoReducer = (state: ITodoModel = initialState, action: any) => {
  switch(action.type) {
    case actionTypes.ADD_TODO: {
      return {
        ...state,
        count: state.count + 1,
        list: [...state.list, action.payload]
      }
    }
    case actionTypes.DELETE_TODO: {
      const oldList = [...state.list];
      oldList.splice(action.payload, 1);
      const newList = oldList;
      return {
        ...state,
        count: state.count - 1,
        list: newList
      }
    }
    default:
      return state;
  }
}