import { Grid } from '@mui/material';
import React from 'react';
import './Footer.css'
import  Button  from '@mui/material/Button';
const Footer = (props) => {
    return (
         <div className="footer">
         <Grid   container
  direction="row"
  justifyContent="space-evenly"
  alignItems="center">
                <Grid item xs>
                <a href="#">contact <br /> PrivateDelight</a>
                </Grid>
                <Grid item xs>
                <a href="#">Blog</a>
                </Grid>
                <Grid item xs>
                <a href="#">Twitter</a>
                </Grid>
                <Grid item xs>
                <a href="#">Locations</a>
                </Grid>
                <Grid item xs>
                <a href="#">Privacy policy</a>
                </Grid>
                <Grid item xs>
                <a href="#">Terms</a>
                </Grid>
                <Grid item xs>
                <Button variant="contained">Help/FeedBack</Button>
                </Grid>
            </Grid>
            <p>&copy; {new Date().getFullYear()} PrivateDelights.ch</p>
         </div>
    );
};

export default Footer;