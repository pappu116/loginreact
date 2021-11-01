import React from 'react';
import SignUp from '../SignUp/SignUp';
import Footer from '../Shear/Footer/Footer';
import Login from './../login/Login';
import AppNav from './../Shear/AppBar/AppNav';

const Home = (props) => {
   var login = false;
    return (
       <div>
         <AppNav/>
          {
            login?<Login/>:<SignUp/>
          }
          <Footer/>
       </div>
    );
};

export default Home;