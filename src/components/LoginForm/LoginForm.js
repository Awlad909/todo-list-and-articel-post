import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LoginBanner from '../../images/login.png';



const LoginForm = ({ login, error }) => {
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    login(details);
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
      <form onSubmit={submitHandler}>
        <TextField
          sx={{ width: "75%", m: 1 }}
          id="standard-basic"
          label="Your Email"
          name="email"
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
          variant="standard"
        />
        <TextField
          sx={{ width: "75%", m: 1 }}
          id="standard-basic"
          label="Your Password"
          type="password"
          name="password"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
          variant="standard"
        />
        <Button
          sx={{ width: "75%", m: 1 }}
          variant="contained"
          type="submit"
          value="Login"
        >
          Login
        </Button>
        <NavLink style={{ textDecoration: "none" }} to="/register">
          <Button variant="text">New User? Please Register</Button>
        </NavLink>
      </form>
      </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={LoginBanner} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginForm;
