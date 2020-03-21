import React, { useCallback, memo } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button"
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useloginFormStyles } from './styles';
import validationSchema from './validationSchema'
import { initialValues } from './initials'
import { SET_USER_DATA } from './modules/types'



const FormController = () => {
    const classes = useloginFormStyles()
    const dispatch = useDispatch()
    const history = useHistory();


    const onSubmit = useCallback((data) => { 
        dispatch({ type: SET_USER_DATA, data  })
        history.push("/user-dashboard")
    }, [history, dispatch])

    const { errors, handleChange, handleSubmit, values, handleBlur } = useFormik({
        initialValues,
        validationSchema,
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit
    });

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <TextField
                error={!!errors.email} 
                id="logon-email"
                label="Email"
                fullWidth
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.email ? errors.email : ""}

            />

            <TextField
                error={!!errors.password} 
                id="login-password"
                label="Password"
                fullWidth
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.password ? errors.password : ""}
            />


                
            <Button variant="contained" color="primary" type="submit" fullWidth>
                Login
            </Button>

        </form>
    )
}

export default memo(FormController)