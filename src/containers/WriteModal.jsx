import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import WriteModalContent from '../components/WriteModalContent'

class WriteModal extends Component {

  render() {
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.todos.modal}
        onClose={() => this.props.closeModal()}
        className="modal"
      >
        <WriteModalContent class={this.props.class}></WriteModalContent>
      </Modal>
    )
  }
}

const mapStateToProps = state => ({
    todos: state.todos,
  });

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch({ type: 'CLOSE_MODAL' }),
})

export default connect(mapStateToProps, mapDispatchToProps)(WriteModal);