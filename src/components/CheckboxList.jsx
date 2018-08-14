import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Comment";
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { addCheck } from '../actions/Check';

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 1000,
    backgroundColor: theme.palette.background.paper
  }
});

class CheckboxList extends React.Component {

  constructor(props){
    super(props);
  }

  handleToggle(value){
    const checked = this.props.todos.ids;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    console.log(checked);
    console.log(currentIndex);
    console.log(value);

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.props.onCheckSubmit(newChecked);
  };

  getTodoText(i) {
    console.log("hoo");
    console.log(this.props.todos.todos[0]);
    return `${i}:00  ${this.props.todos.todos[i]}`;
  }

  render() {
    // this.props.onTodoSubmit('H');
    // this.props.store.dispatch({ type: 'ADD_TODO',  todo: "hoge"});
    // this.props.store.dispatch({ type: 'ADD_CHECK',  ids: [1,2]})
    console.log(this.props.todos);
    return (
      <Grid container spacing={24} direction="column">
        <Grid container item spacing={0} justify="center" >
          <Grid item xs={9}>
            <List>
              {[...Array(25)].map((_, i) => (
                <ListItem
                  key={i}
                  role={undefined}
                  dense
                  button
                  onClick={() => this.handleToggle(i)}
                >
                  <Checkbox
                    checked={this.props.ids.indexOf(i) !== -1}
                    tabIndex={-1}
                    disableRipple
                  />
                <ListItemText primary={this.getTodoText(i)} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

CheckboxList.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  todos: state.todos,
  ids: state.todos.ids,
});

const mapDispatchToProps = dispatch => ({
  onTodoSubmit: todo => dispatch({ type: 'ADD_TODO',  todo}),
  onCheckSubmit: ids => dispatch({ type: 'ADD_CHECK', ids }),
});

const ConnectedWithStyles = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CheckboxList));

export default ConnectedWithStyles;
