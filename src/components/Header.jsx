import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    let input;
    return(
      <div >
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              1DAYプランニング
            </Typography>
            <Button color="inherit" onClick={() => this.props.openModal()}>書き込み</Button>
              <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.props.todos.modal}
                onClose={() => this.props.closeModal()}
                className="modal"
              >
                <div className={classes.paper}>
                  <Typography variant="title" id="modal-title">
                    AddTodo
                  </Typography>
                  <Typography variant="subheading" id="simple-modal-description">
                    <input className="add-todo" ref={(node) => {
                      input = node
                    }} />
                  <Button variant="contained" color="primary" onClick={() => {
                      this.props.onTodoSubmit(input.value)
                      input.value = ''
                    }}>
                      Add Todo
                    </Button>
                  </Typography>
                </div>
              </Modal>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  onTodoSubmit: todo => dispatch({ type: 'ADD_TODO', todo }),
  openModal: () => dispatch({ type: 'OPEN_MODAL' }),
  closeModal: () => dispatch({ type: 'CLOSE_MODAL' }),
});

const ConnectedWithStyles = connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Header));

export default ConnectedWithStyles;
