import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import loginImg from '../../images/login.png'


const Register = () => {
    const [loginData, setLoginData] = useState({})
    const { user, registerUser, IsLoading } = useAuth()
    const history = useHistory()

    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData)
    }

    const handleLogin = e => {
        if (loginData.password !== loginData.password2) {
            alert('Password miss-matched !!')
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }
    return (
        <Container>

            <Grid container spacing={2}>
                <Grid sx={{ m: 'auto' }} item xs={12} md={6}>
                    {
                        user?.email && <Alert severity="success">Registered Successfully</Alert>
                    }
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                    {!IsLoading && <form onSubmit={handleLogin}>
                        <TextField
                            sx={{ width: "50%", m: 1 }}
                            id="standard-basic"
                            label="Name"
                            name='name'
                            type='text'
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: "50%", m: 1 }}
                            id="standard-basic"
                            label="Email"
                            name='email'
                            type='email'
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: "50%", m: 1 }}
                            id="standard-basic"
                            type="password"
                            label="Password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: "50%", m: 1 }}
                            id="standard-basic"
                            type="password"
                            label="Retype Password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <Button
                            style={{ backgroundColor: '#00e5ff' }}
                            sx={{ width: "50%", mt: 3 }}
                            type='submit'
                            variant="contained">Register</Button>
                        <br />
                        <NavLink to='/login'>
                            <Button sx={{ width: "50%", mt: 3 }} variant="text">Already Registerd?Please Login</Button>
                        </NavLink>
                    </form>}
                    {
                        IsLoading && <CircularProgress />
                    }

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={loginImg} alt='' />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;