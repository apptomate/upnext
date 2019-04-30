import React, { PropTypes, Fragment } from "react";
import { Link } from "react-router-dom";
import shortid from "shortid";
import { deleteCourse } from "../../actions";
var courseImg = require("../../../src/assets/images/study.jpg");
import { connect } from "react-redux";
import { EDIT_COURSE_URI, VIEW_COURSE_URI } from "../../helpers/constants";

const HomePageCoursesGrid = props => {
  // console.log('HomePageCoursesGrid', props)
  const { courses = [], deleteCourse, loadMoreHandler } = props;
  const listCollection = [];
  var listrow = [];
  if (!courses.data) {
    return (
      <li className="row">
        <span className=" mx-auto">No courses found</span>{" "}
      </li>
    );
  }
  courses.data.map((value, index) => {
    if (listrow.length < 4) listrow.push(value);
    if (listrow.length == 4 || courses.data.length - 1 == index) {
      listCollection.push(listrow);
      listrow = [];
    }
  });
  return (
    <Fragment>
      {listCollection.map(value => {
        return renderCoursesList(value || [], deleteCourse);
      })}
      {courses.data.length > 19 && (
        <li className="row">
          <button
            type="button"
            onClick={loadMoreHandler}
            className="btn btn-light shadow mx-auto"
          >
            Load More...
          </button>
        </li>
      )}
    </Fragment>
  );
};
export default connect(
  null,
  { deleteCourse }
)(HomePageCoursesGrid);

const renderCoursesList = (courses, deleteCourse) => {
  return (
    <li className="row" key={shortid.generate()}>
      {courses.length < 1 ? (
        <p> No courses Available</p>
      ) : (
        courses.map(course => (
          <Fragment key={shortid.generate()}>
            <div className="col-md-3 grid-height">
              <div className="card bg-dark text-white lesson_grid">
                <img src={courseImg} className="card-img" alt="..." />
                <div className="card-img-overlay study-overlay d-flex align-items-end flex-column p-b-10">
                  <div>
                    <Link to={VIEW_COURSE_URI + "/" + course.hash}>
                      <p className="f-s-10 m-b-5 w-100 mr-auto mt-auto text-warning">
                        Published
                      </p>
                      <h5 className="card-title m-b-5 small w-100 text-white">
                        {course.title.length > 30
                          ? course.title.substring(0, 27) + "..."
                          : course.title}
                      </h5>
                      <p className="f-s-10 m-b-5 w-100 text-warning">
                        By Andrew Scott
                      </p>
                      <p className="f-s-10 m-b-5 w-100 text-warning">
                        378 Views, 83 Favourites, 43 Saved for later
                      </p>
                    </Link>
                    <ul className="lesson_grid_list w-100">
                      <li className="f-s-12">
                        <Link to={EDIT_COURSE_URI + "/" + course.hash}>
                          <i className="far fa-edit" /> Edit
                        </Link>
                      </li>
                      <li className="f-s-12">
                        <a
                          href="#"
                          onClick={e => {
                            e.preventDefault();
                            if (confirm("Are you sure to delete this course?"))
                              deleteCourse(course.hash);
                          }}
                        >
                          <i className="far fa-trash-alt" /> Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        ))
      )}
    </li>
  );
};
