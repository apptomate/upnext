import React, { PropTypes } from 'react';

const SignIn = () => {
    return (
        <div role="tabpanel" className="tab-pane show active" id="singin" aria-labelledby="singin-tab">
                                <h3>Sign In To UpNext</h3>
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
                                </form>
                                <div className="row">
                                    <div className="col text-left">
                                        <div className="styled-checkbox">
                                            <input type="checkbox" name="checkbox" id="remeber"></input>
                                            <label for="remeber">Remember me</label>
                                        </div>
                                    </div>
                                    <div className="col text-right">
                                        <a href="pages-forgot-password.html">Forgot Password ?</a>
                                    </div>
                                </div>
                                <div className="sign-btn text-center">
                                    <a href="db-default.html" className="btn btn-lg btn-gradient-01">
                                        Sign In
                                    </a>
                                </div>
                                <div className="row m-t-50">
                                    <div className="col-md-12">
                                        <div className="text-center">
                                            <a href="#" className="btn btn-lg btn-gradient-05">
                                                <i className="la la-google"></i> Sign In with Google
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
    );
};
module.exports = SignIn;


