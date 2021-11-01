import React from 'react';
// import AppNav from '../Shear/AppBar/AppNav';
import { AppBar,  FormControl,  FormHelperText,  Grid,  Input,    Toolbar} from '@mui/material';
import  CardContent from '@mui/material/CardContent';
import '../login/Login.css';
import  Button  from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';

const SignUp = (props) => {
    return (
        <div>
            {/* <AppNav/> */}

            <CardContent className="card" >
              <AppBar style={{backgroundColor:"#4F6DF5"}} position="none">
                  <Toolbar>
                      
                          Sign Up
                      
                  </Toolbar>
              </AppBar>
             
         <form action="">
         <FormControl>
            <Input id="my-input" type="email" aria-describedby="my-helper-text" placeholder="Gmail" />
            <FormHelperText id="my-helper-text">Type Your Gmail</FormHelperText>
            </FormControl>

            <br />
            <FormControl>
            <VisibilityIcon className="eye"/>
            <Input id="my-input" type="password" aria-describedby="my-helper-text" placeholder="Password"/>
           <FormHelperText id="my-helper-text">password are case-sensative</FormHelperText>
            </FormControl>

            <br />

            <FormControl>
            <VisibilityIcon className="eye"/>
            <Input id="my-input" type="password" aria-describedby="my-helper-text" placeholder="Recovery-Password"/>
           <FormHelperText id="my-helper-text">password are case-sensative</FormHelperText>
            </FormControl>

            <div className="btn">
            <Button variant="contained">Sign Up</Button>
            </div>
         </form>
              {/* form code end */}
          
          {/* password singup help btn code start */}
          <Grid  container  spacing={3}>
                <Grid item xs={6}>
                <a href="#">Set New Password</a>
                </Grid>
                <Grid item xs>
                <a href="#">Login</a>
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

export default SignUp;