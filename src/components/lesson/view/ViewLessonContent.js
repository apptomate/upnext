import React, { PropTypes, Fragment } from 'react';
import { EDIT_LESSON_URI } from '../../../helpers/constants';
import { Link } from "react-router-dom";
import RenderSlideContents from './slideRenderUtils/renderSlideContents';
var courseImg = require('../../../../src/assets/images/study.jpg');
var sideContentImg = require('../../../../src/assets/images/slide-content.jpeg');

const ViewLessonContent = (props) => {
    //console.warn(props);
    const { lessonHash, title, slides } = props;
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <blockquote className="mt-5rem mb-4">
                        <p>LESSON</p>
                        <h6>
                            Negotiation Skills
                          <Link className="float-right f-s-12 text-dark m-l-20" to={EDIT_LESSON_URI + '/' + lessonHash}><i className="fas fa-pencil-alt m-r-10"></i>EDIT THIS LESSON</Link>
                            <a href="#" className="float-right f-s-12 text-dark m-l-20">
                                <i className="fas fa-plus m-r-10"></i> SAVE FOR LATER</a>
                            <a href="#" className="float-right f-s-12 text-dark m-l-20">
                                <i className="far fa-star m-r-10"></i> ADD TO FAVOURITES</a>
                        </h6>
                    </blockquote>
                    <hr className="mb-5"></hr>
                </div>
                <h3> {title.toUpperCase()} </h3>
                {
                    slides.length === 0 || !slides[0]['sections']
                        ? <div className="col-lg-10  mb-5" style={{ textAlign: 'center' }} > <br /> <p> No Slide content Found </p> </div>
                        : <div className="col-lg-10 offset-lg-1 mb-5">
                            <div id="carouselExampleIndicators" className="carousel less_slide slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    {
                                        slides.map((slide, index) => (
                                            <Fragment key={index}>
                                                <li data-target="#carouselExampleIndicators" data-slide-to={index} className={index === 0 ? "active" : ''}></li>
                                            </Fragment>
                                        ))
                                    }
                                </ol>
                                <div className="carousel-inner shadow-sm p-4">
                                    {
                                        slides.map((slide, index) => {
                                            return <Fragment key={index} >
                                                    <div className={`carousel-item ${index === 0 ? "active" : ''}`}>
                                                {!slide['sections']
                                                    ? <p style={{ textAlign: 'center' }}> No Slide content Found </p>
                                                    :
                                                    <RenderSlideContents slide={slide} />
                                                }
                                                </div>
                                            </Fragment>
                                        }
                                        )
                                    }
                                    }
                                </div>
                                {
                    slides.length > 1 && <Fragment>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="text-dark" aria-hidden="true"><i className="fas fa-chevron-left"></i></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="text-dark" aria-hidden="true"><i className="fas fa-chevron-right"></i></span>
                                    <span className="sr-only">Next</span>
                                </a>
                                </Fragment>  
                                }
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};
export default ViewLessonContent;


