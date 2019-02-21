import React, { PropTypes } from 'react';

const LeftContent = () => {
    return (
        <div className="col-xl-3 col-lg-5 col-md-5 col-sm-12 col-12 no-padding">
        <div className="elisyam-bg background-03">
            <div className="elisyam-overlay overlay-08"></div>
            <div className="authentication-col-content-2 mx-auto text-center">
                <div className="logo-centered">
                    <a href="db-default.html">
                        <img src="assets/images/logo.png" alt="logo"></img>
                    </a>
                </div>
                <h1>Up Skill Your Knowledge</h1>
                <span className="description">
                Most upskilling courses are designed to assist our employees to improve their skills and to feed the knowledge on process.  
                </span>
                <ul className="login-nav nav nav-tabs mt-5 justify-content-center" role="tablist" id="animate-tab">
                    <li><a className="active" data-toggle="tab" href="#singin" role="tab" id="singin-tab" data-easein="zoomInUp">Sign In</a></li>
                    <li><a data-toggle="tab" href="#signup" role="tab" id="signup-tab" data-easein="zoomInRight">Sign Up</a></li>
                </ul>
            </div>
        </div>
    </div>
    );
};
module.exports = LeftContent;


