import React, { PropTypes } from 'react';

const SignUp = () => {
    return (
        <div role="tabpanel" className="tab-pane" id="signup" aria-labelledby="signup-tab">
                                <h3>Create An Account</h3>
                                <form>
                                    <div className="group material-input">
                                        <input type="text" required></input>
                                        <span className="highlight"></span>
                                        <span className="bar"></span>
                                        <label>Email</label>
                                    </div>
                                    <div className="group material-input">
                                        <input type="password" required></input>
                                        <span className="highlight"></span>
                                        <span className="bar"></span>
                                        <label>Password</label>
                                    </div>
                                    <div className="group material-input">
                                        <input type="password" required></input>
                                        <span className="highlight"></span>
                                        <span className="bar"></span>
                                        <label>Confirm Password</label>
                                    </div>
                                </form>
                                <div className="row">
                                    <div className="col text-left">
                                        <div className="styled-checkbox">
                                            <input type="checkbox" name="checkbox" id="agree"></input>
                                            <label for="agree">I Accept <a href="#">Terms and Conditions</a></label>
                                        </div>
                                    </div>
                                </div>
                                <div className="sign-btn text-center">
                                    <a href="#" className="btn btn-lg btn-gradient-01">
                                        Sign Up
                                    </a>
                                </div>
                                <div className="row m-t-50">
                                    <div className="col-md-12">
                                        <div className="text-center">
                                            <a href="#" className="btn btn-lg btn-gradient-05">
                                                <i className="la la-google"></i> Sign Up with Google
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
    );
};
export default SignUp;


