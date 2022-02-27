import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { AccountCircle } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const Navbar = () => {
  const [user, setUser] = useState({email:"", password:""})
  const logout = () =>{
    setUser({email:"", password:""})
  }
    return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Typography variant="h6" component="div" style={{marginRight:'10px'}} sx={{ flexGrow: 1 }}>
             Home
          </Typography>
            <Typography variant="h6" component="div" style={{marginRight:'10px'}} sx={{ flexGrow: 1 }}>
             About
          </Typography>
            <Typography variant="h6" component="div" style={{marginRight:'260px'}} sx={{ flexGrow: 1 }}>
             Contact
          </Typography>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             iZOOM LIMITED
          </Typography>
          <NavLink to="/login">
            <Button color="inherit" style={{color:'white', textDecoration:'none'}}>
             <AccountCircle/>login</Button>
          </NavLink>
          <NavLink to="/">
            <Button onClick={logout} color="inherit" style={{color:'white', textDecoration:'none'}}>logout</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
    );
};

export default Navbar;