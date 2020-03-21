import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { userPageStyles } from './styles';

const AppHeader = ({ title }) => {
    const classes = userPageStyles();

    return (
        <AppBar position="static" className={classes.head}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" >
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

AppHeader.defaultProps = {
    title: "User Page"
}

export default AppHeader;