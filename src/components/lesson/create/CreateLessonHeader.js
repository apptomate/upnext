import React, { PropTypes } from 'react';
import { Link,Redirect  } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { EDIT_LESSON_URI } from '../../../helpers/constants';
// import { DEFAULT_ECDH_CURVE } from 'tls';


class CreateLessonHeader extends React.Component {
    constructor(props) {
        super(props)  
        if (this.props.location.pathname === "/CreateLesson" || EDIT_LESSON_URI) {
            this.state = {btnText: 'ADD QUIZ', lessonClass:'fas', quizClass:'far'}
        } else if (this.props.location.pathname == "/CreateQuiz") {
            this.state = {btnText: 'PUBLISH LESSON', quizClass:'fas', lessonClass:'far'} 
        }    
        this.navigateNext = this.navigateNext.bind(this)
    }

    navigateNext() {
        event.preventDefault()        
        this.props.history.push(`/CreateQuiz`)      
    }

    render() {
        const {history : {goBack}} = this.props;
        return (
            <div>
                <main role="main" className="fixed-top">
                    <div className="container-fluid create_less bg-light nav-scroller">
                        <ul className="row fheader nav lh-60 text-dark text-left">
                            <li id="close" className="w-5 text-center border-right">
                                <a className="text-dark pt-2" onClick={goBack}  href="#">
                                    <i className="fas fa-arrow-left"></i>
                                </a>
                            </li>

                            <li id="less_slide" className="w-20 border-right">
                                <Link to="/CreateLesson">
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12 p-r-0">
                                            <div className="text-center float-left add_slide w-20">
                                                <i className="far fa-sticky-note fa-1x"></i>
                                            </div>
                                            <h6 className="p-t-14 float-left mr-4 text-color-black">CREATE NEW LESSON
                                    <br></br>
                                                <span>STEP 1 of 2</span>
                                            </h6>
                                            <div className="float-left">
                                                <i className={'fa-circle fa-xs text-primary ' + this.state.lessonClass}></i>
                                                <i className={'fa-circle fa-xs text-primary ' + this.state.quizClass}></i>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>


                            <li id="quiz" className="w-20">
                                <Link to="/CreateQuiz">
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12 p-r-0">
                                            <div className="text-center float-left quiz_timer w-20">
                                                <i className="fas fa-stopwatch"></i>
                                            </div>
                                            <h6 className="p-t-14 float-left mr-4 text-color-black">CREATE A QUIZ
                                        <br></br>
                                                <span>NO QUESTIONS ADDED</span>
                                            </h6>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li className="w-10 bg-primary text-white slide_steps ml-auto">
                                <div className="lessonHeaderClass" onClick={ this.navigateNext }>
                                    <h6 className="p-t-14 p-l-20 text-color-white">
                                        <span>NEXT STEP</span>
                                        <br></br>
                                        { this.state.btnText }
                                    </h6>
                                </div>
                            </li>
                        </ul>
                    </div>
                </main>
            </div>
        )
    }
};
export default CreateLessonHeader;