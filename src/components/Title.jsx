import React from 'react';
import Typography from '@material-ui/core/Typography';

const Title = props => {
    return (
        <Typography variant="title" color="inherit" className={props.class}>
            { props.children }
        </Typography>
    )
}

export default Title;