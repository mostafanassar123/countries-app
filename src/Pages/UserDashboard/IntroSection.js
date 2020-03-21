import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { userPageStyles } from './styles';

const IntroSection = () => {
    const classes = userPageStyles();
    const values = useSelector(({ loginReducer }) => loginReducer);


    return (
        <>
            <Header />
            <Paper className={classes.paper}>
                <Typography variant="h6" >
                    User Email: {values.email}
                </Typography>

                <Typography variant="h6" >
                   User Password: {values.password}
                </Typography>
            </Paper>
        </>
    )
}

export default IntroSection