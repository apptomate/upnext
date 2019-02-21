import React, { PropTypes } from 'react';
var courseImg = require('../../../../src/assets/images/study.jpg');
var sideContentImg = require('../../../../src/assets/images/slide-content.jpeg'); 

const ViewLessonContent = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <blockquote className="mt-5rem mb-4">
                        <p>LESSON</p>
                        <h6>
                            Negotiation Skills
                     <a href="#" className="float-right f-s-12 text-dark m-l-20"><i className="fas fa-pencil-alt m-r-10"></i> EDIT THIS LESSON</a>
                            <a href="#" className="float-right f-s-12 text-dark m-l-20">
                                <i className="fas fa-plus m-r-10"></i> SAVE FOR LATER</a>
                            <a href="#" className="float-right f-s-12 text-dark m-l-20">
                                <i className="far fa-star m-r-10"></i> ADD TO FAVOURITES</a>
                        </h6>
                    </blockquote>
                    <hr className="mb-5"></hr>
                </div>
                <div className="col-lg-10 offset-lg-1 mb-5">
                    <div id="carouselExampleIndicators" className="carousel less_slide slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner shadow-sm p-4">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="carousel-caption d-none d-md-block text-dark text-left">
                                            <h5>Welcome to the Office</h5>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                                        has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <img src={sideContentImg} className="d-block w-100" alt="..."></img>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="carousel-caption d-none d-md-block text-dark text-left">
                                            <h5>Welcome to the Office</h5>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="carousel-caption d-none d-md-block text-dark text-left">
                                            <h5>Board Room Discussion</h5>
                                            <figure>
                                                <img src={courseImg} alt="" className="w-100"></img>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="carousel-caption d-none d-md-block text-dark text-left">
                                            <h5>Board Room Discussion</h5>
                                            <iframe width="100%" height="450" src="https://www.youtube.com/embed/hA6hldpSTF8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="text-dark" aria-hidden="true"><i className="fas fa-chevron-left"></i></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="text-dark" aria-hidden="true"><i className="fas fa-chevron-right"></i></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
module.exports = ViewLessonContent;


