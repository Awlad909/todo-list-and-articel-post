import React, { useState } from 'react';
import { Container, Grid, TextField, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import login from '../../images/login.png';


const Register = () => {
    const [loginData, setLoginData] = useState({});

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
        
    }
    const handleLoginSubmit = e =>{
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt:8 }} xs={12} md={6}>
                    <Typography variant='body1' gutterBottom>Register</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{width:'75%', m:1}} 
                            id="standard-basic" 
                            label="Your Name"
                            name="name"
                            onChange={handleOnChange} 
                            variant="standard" />
                        <TextField
                            sx={{width:'75%', m:1}} 
                            id="standard-basic" 
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange} 
                            variant="standard" />
                        <TextField
                            sx={{width:'75%', m:1}} 
                            id="standard-basic" 
                            label="Your Password"
                            type="password" 
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{width:'75%', m:1}} 
                            id="standard-basic" 
                            label="ReType Password"
                            type="password" 
                            name="password2"
                            onChange={handleOnChange}
                            variant="standard" />

                            <Button sx={{width:'75%', m:1}} type='submit' variant='contained'>Login</Button>
                            <NavLink style={{textDecoration:'none'}} to="/login">
                                <Button variant='text'>Already Register? Please Login</Button>
                            </NavLink>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width:'100%'}} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;