import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

const ViewLessonHeader = () => {
    return (
        <main role="main">
            <div className="container-fluid create_less bg-dark text-white fixed-top">
                <div className="row">
                    <div className="col-lg-1 col-md-1 col-2 text-center">                       
                        <Link className="text-white pt-2" to="/">
                            <i className="fas fa-arrow-left"></i>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-6">
                        <div className="row">
                            <div className="col-md-4 col-1 text-center">
                                <i className="far fa-user-circle"></i>
                                37
                            </div>
                            <div className="col-md-8 col-4">
                                <h6 className="p-t-14">LEARNERS <br></br> <span>COMPLETED THIS LESSON</span></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-6">
                        <div className="row">
                            <div className="col-md-4 col-1 text-center">
                                <i className="far fa-star"></i>
                                15
                </div>
                            <div className="col-md-8 col-4">
                                <h6 className="p-t-14">FAVOURITED
                                    <br></br>
                                    <span>THIS LESSON</span>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-6">
                        <div className="row">
                            <div className="col-md-4 col-1 text-center">
                                <i className="fas fa-plus-circle"></i>
                                10
                </div>
                            <div className="col-md-8 col-4">
                                <h6 className="p-t-14">SAVED
                        <br></br>
                                    <span>IT FOR LATER READ</span>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5 col-6 f-s-12">
                        <span className="m-r-10">Slide 1 of 10</span>
                        <i className="fas fa-circle fa-xs text-info"></i>
                        <i className="far fa-circle fa-xs text-info"></i>
                        <i className="far fa-circle fa-xs text-info"></i>
                        <i className="far fa-circle fa-xs text-info"></i>
                        <i className="far fa-circle fa-xs text-info"></i>
                        <i className="far fa-circle fa-xs text-info"></i>
                        <i className="far fa-circle fa-xs text-info"></i>
                        <i className="far fa-circle fa-xs text-info"></i>
                        <i className="far fa-circle fa-xs text-info"></i>
                        <i className="far fa-circle fa-xs text-info"></i>
                    </div>
                    <div className="col-lg-1 col-md-2 col-4 bg-primary text-white">
                        <h6 className="p-t-14">
                            LESSON PUBLISHED
                        </h6>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default ViewLessonHeader;


