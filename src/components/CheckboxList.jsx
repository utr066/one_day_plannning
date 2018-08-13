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
    this.state = {
      checked: [0]
    };
  }

  handleToggle(value){
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  };

  render() {
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
                    checked={this.state.checked.indexOf(i) !== -1}
                    tabIndex={-1}
                    disableRipple
                  />
                <ListItemText primary={`${i}:00`} />
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
  todos: state,
});

const ConnectedWithStyles = connect(mapStateToProps)(withStyles(styles)(CheckboxList));

export default ConnectedWithStyles;
