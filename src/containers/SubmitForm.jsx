import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

class SubmitForm extends Component {

    render() {
        let input;
        return (
            <div>
                <Typography variant="subheading" id="simple-modal-description">
                <input className="add-todo" ref={(node) => {
                    input = node
                }} />
                </Typography>
                <Button variant="contained" color="primary" onClick={() => {
                    this.props.onTodoSubmit(input.value)
                    input.value = ''
                }}>
                    {this.props.children}
                </Button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos,
  });

const mapDispatchToProps = dispatch => ({
    onTodoSubmit: todo => dispatch({ type: 'ADD_TODO', todo }),
})

 const ConnectedSubmitForm = connect(mapStateToProps,mapDispatchToProps)(SubmitForm);
export default ConnectedSubmitForm;