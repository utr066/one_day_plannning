import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddTodo extends Component {

  handleSubmit(e) {
    e.preventDefault();
    this.props.onTodoSubmit(this.textInput.value);
    this.textInput.value = ''
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" ref={(input) => this.textInput = input} placeholder={this.props.message} />
          <input type="submit"/>
        </form>
        <div class="content">
          <ul>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state,
});

const mapDispatchToProps = dispatch => ({
  onTodoSubmit: todo => dispatch({ type: 'ADD_TODO', todo }),
});

const ConnectedAddTodo = connect(mapStateToProps,mapDispatchToProps)(AddTodo);

export default ConnectedAddTodo;
