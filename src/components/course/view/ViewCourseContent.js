import React, { PropTypes, Fragment } from "react";
import { EDIT_LESSON_URI } from "../../../helpers/constants";
import { Link } from "react-router-dom";
import RenderSlideContents from "./slideRenderUtils/renderSlideContents";
var profileImg = require("../../../../src/assets/images/profile.jpg");
var sideContentImg = require("../../../../src/assets/images/slide-content.jpeg");

const ViewLessonContent = props => {
  //console.warn(props);
  const { lessonHash, title, slides } = props;
  return (
    <Fragment>
      <div class="container-fluid bg-light course-details">
        <br />
        <br />
        <br />
        <div class="row">
          <div class="container">
            <div class="row p-t-20 p-b-20">
              <div class="col">
                <h1 class="count">
                  503
                  <span>
                    Enrolled
                    <br /> Learners
                  </span>
                </h1>
              </div>
              <div class="col">
                <h1 class="count">
                  115
                  <span>
                    Learners
                    <br /> passed
                  </span>
                </h1>
              </div>
              <div class="col">
                <h1 class="count">
                  89
                  <span>
                    Learners
                    <br /> in-progress
                  </span>
                </h1>
              </div>
              <div class="col">
                <h1 class="count">
                  79%
                  <span>
                    Avg Completion
                    <br /> Rating
                  </span>
                </h1>
              </div>
              <div class="col">
                <h1 class="count">
                  3:15
                  <span>
                    Avg Time
                    <br /> Spent
                  </span>
                </h1>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 col-lg-12">
                <ul class="nav cou-less f-w-500">
                  <li>
                    <a class="nav-link active">COURSE OVERVIEW</a>
                  </li>
                  <li>
                    <a class="nav-link">LEARNERS ENROLLED</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container course-details">
        <div class="row">
          <div class="col-md-12 col-lg-12 mt-5">
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-cover"
                role="tabpanel"
                aria-labelledby="pills-cover-tab"
              >
                <blockquote class="mt-5 mb-4">
                  <p class="f-w-600">COURSE</p>
                  <h6>Employee on-boarding and training</h6>
                </blockquote>
                <div class="p-l-30 p-r-30">
                  <div class="course_tutor mt-5 mb-5">
                    <img
                      src={profileImg}
                      class="rounded-circle float-left"
                      alt=""
                    />
                    <h6 class="p-t-10 m-b-5">Rakul Kumar Pradhan</h6>
                    <p class="f-s-10">CEO, COURSE ADMIN</p>
                  </div>
                  <p>
                    This course provides an overview of key employment
                    regulations. Too cultivated use solicitude frequently.
                    Dashwood likewise up consider continue entrance ladyship oh.
                    Wrong guest given purse power is no. Friendship to
                    connection an am considered difficulty. Country met pursuit
                    lasting moments why calling certain the. Middletons
                    boisterous our way understood law. Among state cease how and
                    sight since shall.
                  </p>
                </div>
              </div>
              <div
                class="tab-pane fade"
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
export default ViewLessonContent;
