import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class WriteButton extends Component {

  render() {
    return (
        <div>
          <Button color="inherit"
            onClick={() => this.props.openModal()}
          >
            { this.props.children }
          </Button>
        </div>

    )
  }
}

const mapStateToProps = state => ({
    todos: state.todos,
  });

const mapDispatchToProps = dispatch => ({
    openModal: () => dispatch({ type: 'OPEN_MODAL' }),
    closeModal: () => dispatch({ type: 'CLOSE_MODAL' }),
})

export default connect(mapStateToProps, mapDispatchToProps)(WriteButton);