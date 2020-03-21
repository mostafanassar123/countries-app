import React from 'react';
import Paper from '@material-ui/core/Paper';
import { useloginStyles } from './styles';
import FormController from './FormController'


const LoginPage = () => {
    const classes = useloginStyles();
    
    return (
        <div className={classes.root}>

            <Paper className={classes.paper}>
                <FormController />
            </Paper>

        </div>
    )
}

export default LoginPage