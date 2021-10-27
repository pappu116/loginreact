import React from 'react';
import AppNav from '../Shear/AppBar/AppNav';
import { AppBar,  FormControl,  FormHelperText,  Grid,  Input,    Toolbar} from '@mui/material';
import  CardContent from '@mui/material/CardContent';
import './Login.css';
import  Button  from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Login = (props) => {
    return (
        <div>
            <AppNav/>

            <CardContent className="card" >
              <AppBar style={{backgroundColor:"#4F6DF5"}} position="none">
                  <Toolbar>
                      
                          Login
                      
                  </Toolbar>
              </AppBar>
             
         <form action="">
         <FormControl>
            <Input id="my-input" aria-describedby="my-helper-text" placeholder="Username" />
            <FormHelperText id="my-helper-text">usernames are case-sensative</FormHelperText>
            </FormControl>
            <br />
            <FormControl>
            <VisibilityIcon className="eye"/>
            <Input id="my-input" aria-describedby="my-helper-text" placeholder="Password"/>
           
            <FormHelperText id="my-helper-text">password are case-sensative</FormHelperText>
            </FormControl>
            <div className="btn">
            <Button variant="contained">Login</Button>
            </div>
         </form>
              {/* form code end */}
          
          {/* password singup help btn code start */}
          <Grid  container  spacing={3}>
                <Grid item xs={6}>
                <a href="#">Set New Password</a>
                </Grid>
                <Grid item xs>
                <a href="#">Sign Up</a>
                </Grid>
                <Grid item xs>
                <a href="#">Help</a>
                </Grid>
            </Grid>
                {/* password singup help btn code end */}
            
            </CardContent>
        </div>
    );
};

export default Login;