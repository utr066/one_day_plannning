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
  ],
  modal: false,
}
const addTodo = (state, action) => {
  const arr = state.todos.slice();
  state.todos.map((todo, index) => {
    if (state.ids.indexOf(index) !== -1) {
        arr[index] = action.todo
    }
  });

  return Object.assign({}, state, {
    todos: arr,
    ids: [],
    modal: false,
  });
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return addTodo(state, action);
    case 'ADD_CHECK':
      return Object.assign({}, state, {
        ids: action.ids
      });
    case 'OPEN_MODAL':
      return Object.assign({}, state, {
        modal: true
      });
    case 'CLOSE_MODAL':
      return Object.assign({}, state, {
        modal: false
      });
    default:
      return state
  }
}

export default combineReducers({ todos });
