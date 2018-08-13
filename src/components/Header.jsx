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

// const styles = {
//   root: {
//     flexGrow: 1,
//   },
//   flex: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20,
//   },
// };

const styles = theme => ({
  paper: {
    // position: 'absolute',
    // width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  //
  // rand() {
  //   return Math.round(Math.random() * 20) - 10;
  // }

  getModalStyle() {
    // const top = 50 + this.rand();
    // const left = 50 + this.rand();

    return {
      width: `50%`,
      margin: `auto`,
      marginTop: `300px`,
    };
  }


  handleOpen(){
    this.setState({ open: true });
  };

  handleClose(){
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    let input;
    return(
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              1日プランニング
            </Typography>
            <Button color="inherit" onClick={() => this.handleOpen()}>書き込み</Button>
              <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={() => this.handleClose()}
              >
                <div style={this.getModalStyle()} className={classes.paper}>
                  <Typography variant="title" id="modal-title">
                    AddTodo
                  </Typography>
                  <Typography variant="subheading" id="simple-modal-description">
                    <input ref={(node) => {
                      input = node
                    }} />
                    <button onClick={() => {
                      this.props.onTodoSubmit(input.value)
                      input.value = ''
                    }}>
                      Add Todo
                    </button>
                  </Typography>
                </div>
              </Modal>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

// function ButtonAppBar(props) {
//   const { classes } = props;
//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="title" color="inherit" className={classes.flex}>
//             1日プランニング
//           </Typography>
//           <Button color="inherit" onClick={e => this.handleClick(e)}>書き込み</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }
//
// ButtonAppBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

const mapStateToProps = state => ({
  todos: state,
});

const mapDispatchToProps = dispatch => ({
  onTodoSubmit: todo => dispatch({ type: 'ADD_TODO', todo }),
});

const ConnectedWithStyles = connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Header));

export default ConnectedWithStyles;
