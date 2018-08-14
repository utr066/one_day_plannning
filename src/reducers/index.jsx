import { combineReducers } from 'redux';

const initialState = {
  todo: "",
  ids: [],
  todos: [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]
}
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const arr = state.todos.slice();
      state.todos.map((todo, index) => {
        if (state.ids.indexOf(index) !== -1) {
           arr[index] = action.todo
        }
      });

      return Object.assign({}, state, {
        todos: arr
      });
    default:
      return state
  }
}

const todos = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TODO':
      return todo(state, action);
    case 'ADD_CHECK':
      return Object.assign({}, state, {
        ids: action.ids
      });
    default:
      return state
  }
}

export default combineReducers({ todos });
