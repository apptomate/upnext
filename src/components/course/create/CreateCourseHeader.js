import React, { Fragment, PropTypes } from "react";
import { Link, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { EDIT_LESSON_URI } from "../../../helpers/constants";
// import { DEFAULT_ECDH_CURVE } from 'tls';

class CreateLessonHeader extends React.Component {
  constructor(props) {
    super(props);
    //     if (this.props.location.pathname === "/CreateCourse" || EDIT_LESSON_URI) {
    //       this.state = {
    //         btnText: "ADD QUIZ",
    //         lessonClass: "fas",
    //         quizClass: "far"
    //       };
    //     } else if (this.props.location.pathname == "/CreateQuiz") {
    //       this.state = {
    //         btnText: "PUBLISH LESSON",
    //         quizClass: "fas",
    //         lessonClass: "far"
    //       };
    //     }
    //     this.navigateNext = this.navigateNext.bind(this);
  }

  //   navigateNext() {
  //     event.preventDefault();
  //     this.props.history.push(`/CreateQuiz`);
  //   }

  render() {
    const {
      history: { goBack }
    } = this.props;
    return (
      <Fragment>
        <div>
          <main role="main">
            <div className="container-fluid create_less bg-light fixed-top">
              <div className="row">
                <div className="close" onClick={goBack}>
                  <a className="pt-2" href="#">
                    <i className="fas fa-arrow-left" />
                  </a>
                </div>
                <div className="fcourse-view border-left active">
                  <i className="fas fa-book-open" />
                  <div>
                    COURSE OVERVIEW <br />
                    <span>ADD COURSE DETAILS</span>
                  </div>
                </div>
                <div className="fadd-less border-left">
                  <i className="fas fa-sticky-note" />
                  <div>
                    ADD LESSONS
                    <br />
                    <span>NO LESSONS ADDED</span>
                  </div>
                </div>
                <div className="fadd-learn border-left">
                  <i className="fas fa-user-check" />
                  <div>
                    ADD LEARNERS
                    <br />
                    <span>NO ENROLLED</span>
                  </div>
                </div>
                <div className="bg-primary fadd-lesson ml-auto p-l-20 p-r-20">
                  <button className="btn btn-link text-white">
                    NEXT STEP
                    <br /> <span>ADD LESSONS</span>
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </Fragment>
    );
  }
}
export default CreateLessonHeader;
