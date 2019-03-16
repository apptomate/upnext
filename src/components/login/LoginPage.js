import React, { PropTypes } from 'react';
import LeftContent from "./LeftContent";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

// import '../../assets/vendors/css/base/elisyam-1.5.css';
import '../../assets/vendors/css/base/helper.css';
import '../../assets/css/animate/animate.min.css';
import '../../assets/vendors/js/base/core.min.js';
import '../../assets/vendors/js/app/app.min.js';
import '../../assets/js/components/tabs/animated-tabs.min.js';



const LoginPage = () => {
    return (
     <div className="login">
        <div id="preloader">
            <div className="canvas">
                <img src="assets/images/logo.png" alt="logo" className="loader-logo"></img>
                <div className="spinner"></div>   
            </div>
        </div>
        <div className="container-fluid no-padding h-100">
            <div className="row flex-row h-100 bg-white">
            <LeftContent></LeftContent>
            <div className="col-xl-9 col-lg-7 col-md-7 col-sm-12 col-12 my-auto no-padding">
                    <div className="authentication-form-2 mx-auto">
                        <div className="tab-content" id="animate-tab-content">
                        <SignIn></SignIn>
                        <SignUp></SignUp>
                        </div>
                    </div>                 
                </div>
            </div>
            </div>
    </div>
    );
};
export default LoginPage;


