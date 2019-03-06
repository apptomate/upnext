import React, { PropTypes } from 'react';
import { Link,Redirect  } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class CreateLessonHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            btnText: 'ADD QUIZ'
        }
        this.changeText = this.changeText.bind(this)
    }

    changeText() {
        this.setState({
            btnText: 'ADD LESSON'
        });
    }

    render() {

        return (
            <div>
                <main role="main" className="fixed-top">
                    <div className="container-fluid create_less bg-light nav-scroller">
                        <ul className="row fheader nav lh-60 text-dark text-left">
                            <li id="close" className="w-5 text-center border-right">
                                <Link className="text-dark pt-2" to="/">
                                    <i className="fas fa-times"></i>
                                </Link>
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
                                                <i className="fas fa-circle fa-xs text-primary"></i>
                                                <i className="far fa-circle fa-xs text-primary"></i>
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
                            <li className="w-10 bg-primary text-white slide_steps ml-auto" onClick={() => history.push('/CreateQuiz')}>
                                <div className="lessonHeaderClass" onClick={ this.changeText }>
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
module.exports = CreateLessonHeader;


