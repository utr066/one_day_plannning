import { combineReducers } from 'redux';

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todo: action.todo,
      }
    default:
      return state
  }
}

const todos = (state = {todo: '', ids: []}, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'ADD_CHECK':
      return Object.assign({}, state, {
        ids: action.ids
      });
    default:
      return state
  }
}

export default combineReducers({ todos });
