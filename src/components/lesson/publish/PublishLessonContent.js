import React, { PropTypes } from "react";
import { Link } from "react-router-dom";
import { VIEW_LESSON_URI } from "../../../helpers/constants";
var profileImg = require("../../../../src/assets/images/profile.jpg");

const PublishLessonContent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h6 className="m-t-65">Lesson Title</h6>
          <h2 className="text-black-50">Employee on boarding and training</h2>
        </div>
        <div className="col-lg-12 m-b-70">
          <h6 className="m-t-50 m-b-20">Published by</h6>
          <div className="less_publish">
            <img
              src={profileImg}
              className="rounded-circle float-left"
              alt=""
            />
            <h6 className="p-t-10 m-b-5">Rakul Kumar Pradhan</h6>
            <p className="f-s-10">CEO, COURSE ADMIN</p>
          </div>
        </div>
        <div className="col-lg-12 m-b-100">
          <p className="f-s-40 text-info f-w-600 m-b-0">Congratulations!</p>
          <p className="m-b-50">
            You have successfully created and published this lesson
          </p>
          <p className="m-b-50 f-w-600">
            You have added 15 slides in this lesson.
          </p>
          <p>
            <Link to={VIEW_LESSON_URI} className="m-b-50">
              <button
                type="button"
                className="btn btn-primary f-s-12 rounded-pill pr-4 pl-4 pt-2 pb-2"
              >
                VIEW PUBLISHED LESSON
              </button>
            </Link>
          </p>
          <p>
            <Link to="/" className="m-b-50">
              <button
                type="button"
                className="btn btn-primary f-s-12 rounded-pill pr-4 pl-4 pt-2 pb-2"
              >
                EXPLORE ALL LESSONS
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default PublishLessonContent;
