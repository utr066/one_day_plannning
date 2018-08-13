import { combineReducers } from 'redux';

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todo: action.todo,
      }
    case 'CHANGE_MESSAGE':
      return Object.assign({}, state, { message: action.todo });
    default:
      return state;
  }
  return state;
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    default:
      return state
  }
}

export default combineReducers({ todos });
