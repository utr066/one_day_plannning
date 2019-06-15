import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Title from './Title'
import WriteButton from '../containers/WriteButton'
import WriteModal from '../containers/WriteModal'

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
    return(
      <div >
        <AppBar position="static">
          <Toolbar>
            <Title class={classes.flex} >1DAY PLANNING</Title>
            <WriteButton>書き込み</WriteButton>
            <WriteModal class={classes.paper}/>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
const styledHeader = withStyles(styles)(Header)
export default styledHeader;
