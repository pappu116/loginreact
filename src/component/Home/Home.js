import React from 'react';
import SignUp from '../SignUp/SignUp';
import Footer from '../Shear/Footer/Footer';
import Login from './../login/Login';
import AppNav from './../Shear/AppBar/AppNav';
import Nid from '../NID/Nid';

const Home = (props) => {
   var login = true;
    return (
       <div>
         <AppNav/>
         <Nid/>
          {/* {
            login?<Login/>:<SignUp/>
          } */}
          <Footer/>
       </div>
    );
};

export default Home;