import { actionTypes } from '../actions/';

interface ITodoModel {
  count: number;
  list: string[];
}

export const initialState: ITodoModel = {
  count: 2,
  list: ["Do the laundry", "Do the dishes"]
};

export const todoReducer = (state: ITodoModel = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_TODO: {
      console.log(state);
      return {
        ...state,
        count: state.count + 1,
        list: [...state.list, action.payload]
      }
    }
    default:
      return state;
  }
}