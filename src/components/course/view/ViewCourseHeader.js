import React, { PropTypes, Fragment, Component } from "react";
import { Link } from "react-router-dom";
import { renderComponent } from "recompose";
import { EDIT_COURSE_URI } from "../../../helpers/constants";

class ViewLessonHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      match: { params },
      history: { goBack }
    } = this.props;

    return (
      <main role="main">
        <div className="container-fluid create_less bg-dark text-white fixed-top">
          <div className="row">
            <div
              onClick={goBack}
              className="col-lg-1 col-md-1 col-2 text-center"
            >
              <a className="text-white pt-2" href="#">
                <i className="fas fa-arrow-left" />
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-6">
              <div className="row">
                <div className="col-md-4 col-1 text-center">
                  <i className="far fa-star" />
                  20
                </div>
                <div className="col-md-8 col-4">
                  <h6 className="p-t-14">
                    FAVOURITED <br /> <span>THIS COURSE</span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-6">
              <div className="row">
                <div className="col-md-4 col-1 text-center">
                  <i className="fas fa-plus-circle" />
                  31
                </div>
                <div className="col-md-8 col-4">
                  <h6 className="p-t-14">
                    SAVED
                    <br />
                    <span>IT FOR LATER READ</span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-6">
              <div className="row">
                <div className="col-md-4 col-1 text-center">
                  <i className="fas fa-sticky-note" />5
                </div>
                <div className="col-md-8 col-4">
                  <h6 className="p-t-14">
                    LESSONS
                    <br />
                    <span>IN THIS COURSE</span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-1 col-md-2 col-4 bg-primary  ml-auto">
              <Link to={EDIT_COURSE_URI + "/" + params.hash}>
                <h6 className="p-t-20 text-white">EDIT COURSE</h6>
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default ViewLessonHeader;
