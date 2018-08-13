import { combineReducers } from 'redux';

// const check = (state, action) => {
//   switch (action.type) {
//     case 'ADD_CHECK':
//       return {
//         ids: action.ids,
//       }
//     default:
//       return state
//   }
// }


const checks = (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case 'ADD_CHECK':
      return [
        ...state,
        action.ids
      ]
    default:
      return state
  }
}

export default combineReducers({ checks });
