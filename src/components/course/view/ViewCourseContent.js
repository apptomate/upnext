import React, { PropTypes, Fragment } from "react";
import { EDIT_LESSON_URI } from "../../../helpers/constants";
import { Link } from "react-router-dom";
import RenderSlideContents from "./slideRenderUtils/renderSlideContents";
var profileImg = require("../../../../src/assets/images/profile.jpg");
var sideContentImg = require("../../../../src/assets/images/slide-content.jpeg");

const ViewCourseContent = props => {
  console.warn(props);
  const { courseHash, title, description, duration } = props;
  return (
    <Fragment>
      <div className="container-fluid bg-light course-details">
        <br />
        <br />
        <br />
        <div className="row">
          <div className="container">
            <div className="row p-t-20 p-b-20">
              <div className="col">
                <h1 className="count">
                  503
                  <span>
                    Enrolled
                    <br /> Learners
                  </span>
                </h1>
              </div>
              <div className="col">
                <h1 className="count">
                  115
                  <span>
                    Learners
                    <br /> passed
                  </span>
                </h1>
              </div>
              <div className="col">
                <h1 className="count">
                  89
                  <span>
                    Learners
                    <br /> in-progress
                  </span>
                </h1>
              </div>
              <div className="col">
                <h1 className="count">
                  79%
                  <span>
                    Avg Completion
                    <br /> Rating
                  </span>
                </h1>
              </div>
              <div className="col">
                <h1 className="count">
                  3:15
                  <span>
                    Avg Time
                    <br /> Spent
                  </span>
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-12">
                <ul className="nav cou-less f-w-500">
                  <li>
                    <a className="nav-link active">COURSE OVERVIEW</a>
                  </li>
                  <li>
                    <a className="nav-link">LEARNERS ENROLLED</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container course-details">
        <div className="row">
          <div className="col-md-12 col-lg-12 mt-5">
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-cover"
                role="tabpanel"
                aria-labelledby="pills-cover-tab"
              >
                <blockquote className="mt-5 mb-4">
                  <p className="f-w-600">COURSE</p>
                  <h6>{title}</h6>
                </blockquote>
                <div className="p-l-30 p-r-30">
                  <div className="course_tutor mt-5 mb-5">
                    <img
                      src={profileImg}
                      className="rounded-circle float-left"
                      alt=""
                    />
                    <h6 className="p-t-10 m-b-5">Rakul Kumar Pradhan</h6>
                    <p className="f-s-10">CEO, COURSE ADMIN</p>
                  </div>
                  <p>{description}</p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-lenroll"
                role="tabpanel"
                aria-labelledby="pills-lenroll-tab"
              >
                Profile
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ViewCourseContent;
