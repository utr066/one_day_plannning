import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import App from './components/App';
import reducer from './reducers/';
import { addTodo } from './actions/Todo';
import { addCheck } from './actions/Check';

const store = createStore(reducer)
// const checkStore = createStore(check)

// store.dispatch(addTodo('Hello React!'))
// store.dispatch(addCheck([1,2,3]))

// store.dispatch(addCheck('1'))
console.log(store.getState())

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <App store={createStore(reducer)} />
  </Provider>,
  document.querySelector('.container')
);
