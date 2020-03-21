import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { useLoaderStyle } from './styles';


const Loader = ({ loading, error }) => {
    const classes = useLoaderStyle();

    return (
        <div className={classes.root}>
            {loading ? <CircularProgress size={18} /> : (
                <Typography className={classes.error}>
                    {error}
                </Typography>
            )}
        </div>
    );
}

export default React.memo(Loader);