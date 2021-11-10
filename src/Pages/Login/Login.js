import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import loginImg from '../../images/login.png'





const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { loginUser, googleSignIn } = useAuth()
    const history = useHistory()
    const location = useLocation()

    const handleOnChange = e => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData)
    }

    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, history, location)
        history.push('/home')
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        googleSignIn(location, history)

    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ m: 'auto' }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLogin}>
                        <TextField
                            sx={{ width: "50%", m: 1 }}
                            id="standard-basic"
                            label="Email"
                            name='email'
                            onBlur={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: "50%", m: 1 }}
                            id="standard-basic"
                            type="password"
                            label="Password"
                            name="password"
                            onBlur={handleOnChange}
                            variant="standard" />
                        <Button
                            style={{ backgroundColor: '#00e5ff' }}
                            sx={{ width: "50%", mt: 3 }}
                            type='submit'
                            variant="contained">Login</Button>
                        <br />
                        <NavLink to='/register'>
                            <Button sx={{ width: "50%", mt: 3 }} variant="text">New Here? Please Register</Button>
                        </NavLink>
                    </form>
                    <Button onClick={handleGoogleSignIn} sx={{ width: "50%", mt: 3 }} variant="contained">Google Sign In</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={loginImg} alt='' />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;