import React, { PropTypes, Fragment } from "react";
import { Link } from "react-router-dom";
import shortid from "shortid";
import { deleteLesson } from "../../actions";
var courseImg = require("../../../src/assets/images/study.jpg");
import { connect } from "react-redux";
import { EDIT_LESSON_URI, VIEW_LESSON_URI } from "../../helpers/constants";

const HomePageLessonsGrid = props => {
  // console.log('HomePageLessonsGrid', props)
  const { lessons = [], deleteLesson, loadMoreHandler } = props;
  const listCollection = [];
  var listrow = [];
  if (!lessons.data) {
    return (
      <li className="row">
        <span className=" mx-auto">No lessons found</span>{" "}
      </li>
    );
  }
  lessons.data.map((value, index) => {
    if (listrow.length < 4) listrow.push(value);
    if (listrow.length == 4 || lessons.data.length - 1 == index) {
      listCollection.push(listrow);
      listrow = [];
    }
  });
  return (
    <Fragment>
      {listCollection.map(value => {
        return renderLessonsList(value || [], deleteLesson);
      })}
      {lessons.data.length > 19 && (
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
  { deleteLesson }
)(HomePageLessonsGrid);

const renderLessonsList = (lessons, deleteLesson) => {
  return (
    <li className="row" key={shortid.generate()}>
      {lessons.length < 1 ? (
        <p> No lessons Available</p>
      ) : (
        lessons.map(lesson => (
          <Fragment key={shortid.generate()}>
            <div className="col-md-3 grid-height">
              <div className="card bg-dark text-white lesson_grid">
                <img src={courseImg} className="card-img" alt="..." />
                <div className="card-img-overlay study-overlay d-flex align-items-end flex-column p-b-10">
                  <div>
                    <Link to={VIEW_LESSON_URI + "/" + lesson.hash}>
                      <p className="f-s-10 m-b-5 w-100 mr-auto mt-auto text-warning">
                        Published
                      </p>
                      <h5 className="card-title m-b-5 small w-100 text-white">
                        {lesson.title.length > 30
                          ? lesson.title.substring(0, 27) + "..."
                          : lesson.title}
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
                        <Link to={EDIT_LESSON_URI + "/" + lesson.hash}>
                          <i className="far fa-edit" /> Edit
                        </Link>
                      </li>
                      <li className="f-s-12">
                        <a
                          href="#"
                          onClick={e => {
                            e.preventDefault();
                            if (confirm("Are you sure to delete this lesson?"))
                              deleteLesson(lesson.hash);
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
