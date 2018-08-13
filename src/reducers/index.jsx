import { combineReducers } from 'redux';

const initialState = [
    {todo: ""},
    {ids: []}
];

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


const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'ADD_CHECK':
      return [
        ...state,
        { ids: action.ids},
      ]
    default:
      return state
  }
}

export default combineReducers({ todos });
