import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import  Button  from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import '../../login/Login.css'


const AppNav = (props) => {
   
    return (
        
        <div>
            <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{backgroundColor:"white",color:"#637EF6"}} position="static">
              <Toolbar>
              <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  PrivateDelight
                </Typography>
            <Button color="inherit"><LocationOnIcon style={{color:"#757575"}}/> <a href="#">Location</a></Button>
                <Button color="inherit"> <SearchIcon style={{color:"#757575"}} /> <a href="#">Search</a></Button>
                <Button color="inherit"><AccountCircleIcon style={{color:"#757575"}}/> <a href="#">Login</a> </Button>
            
              
              </Toolbar>
            </AppBar>
           </Box>
         
        </div>
    );
};

export default AppNav;