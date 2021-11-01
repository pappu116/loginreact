import React from 'react';
// import AppNav from '../Shear/AppBar/AppNav';
import { AppBar,  FormControl,  FormHelperText,  Grid,  Input,    Toolbar} from '@mui/material';
import  CardContent from '@mui/material/CardContent';
import '../login/Login.css';
import  Button  from '@mui/material/Button';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const Nid = (props) => {
    return (
        <div>
            <CardContent className="card" style={{borderRadius:"10px"}} >
              <AppBar style={{backgroundColor:"#F2F2F2",color:"#A0A0A0",alignItems:"center"}} position="none">
                  <Toolbar >
                      
                        NEED HELP?
                      
                  </Toolbar>
              </AppBar>
             
         <form action="">
         <FormControl>
             {/* card code start */}
             <h2 >Upload Photo</h2>
             <Card sx={{ maxWidth: 345 ,margin:"10px auto"}}>     
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="100%"
                    width="100%"
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Passport_card.jpg/220px-Passport_card.jpg"
                    alt="green iguana"
                    />
                   
                </CardActionArea>
             </Card>
             {/* card code end */}

          {/*divider code start  */}
          <ListItem>
             <ListItemAvatar >
                <Avatar style={{backgroundColor:"#243849"}}>
                    1
                </Avatar>
             </ListItemAvatar>
                <ListItemText>
                    <p style={{fontSize:"20px"}}>
                Upload or take a photo of <br />  your GOVERNMENT ID on a flat surface
                </p>
                </ListItemText>
            </ListItem>
          {/* divider code end */}

          {/* image upload btn code start */}
          <label htmlFor="upload-photo">
                <input
                style={{ display: "none" }}
                id="upload-photo"
                name="upload-photo"
                type="file"
                />
                <br />
                <Button id="btnphoto" variant="contained" component="span">
                TAKE PHOTO OF Id <CameraAltIcon className="camera"/>
                </Button>{" "}
            </label>
          {/* img btn code end */}
         </FormControl>
            <FormControl>
            <ListItem>
             <ListItemAvatar >
                <Avatar style={{backgroundColor:"#243849"}}>
                    2
                </Avatar>
             </ListItemAvatar>
                <ListItemText>
                    <p style={{fontSize:"20px"}}>
                Upload or take a photo of <br />  your GOVERNMENT ID on a flat surface
                </p>
                </ListItemText>
            </ListItem>
            <label htmlFor="upload-photo">
                <input
                style={{ display: "none" }}
                id="upload-photo"
                name="upload-photo"
                type="file"
                />
                <Button id="btnphoto" variant="contained" component="span">
                TAKE PHOTO OF Id <CameraAltIcon className="camera"/>
                </Button>{" "}
            </label>
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

export default Nid;