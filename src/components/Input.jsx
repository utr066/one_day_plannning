import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Input extends Component {

    render() {
        let input;
        return(
            <Typography variant={this.props.variant} id="simple-modal-description">
              <input className="add-todo" ref={(node) => {
                input = node
              }} />
            </Typography>
        )
    }
}

export default Input