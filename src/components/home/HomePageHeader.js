import React, { PropTypes } from "react";
import { Link } from "react-router-dom";
var courseImg = require("../../../src/assets/images/study.jpg");
import { loadLessons } from "../../actions";
import { connect } from "react-redux";
import { CREATE_LESSON_URI } from "../../helpers/constants";

const HomePageHeader = props => {
  const { lessons = {} } = props;
  let handleOnchange = e => {
    e.preventDefault();
    let params = {
      pageNumber: 1,
      title: e.target.value
    };
    props.loadLessons(params);
  };

  return (
    <main role="main">
      <div className="container">
        <div className="row">
          <h6 className="h-100 mt-5 mb-4 title_block col-md-9 col-sm-12">
            Discover Content in lessons
          </h6>
          <div className=" col-md-3 mt-5 mb-3 col-sm-12 crt_less">
            <Link to={CREATE_LESSON_URI}>
              <button
                type="button"
                className="btn btn-primary-50 btn-sm float-right f-s-12 rounded-pill pr-4 pl-4 pt-2 pb-2"
              ><i className="far fa-file m-r-5"></i> 
                Create a New Lesson
              </button>
            </Link>
          </div>
        </div>
        <form
          onSubmit={e => e.preventDefault()}
          className="form-inline mt-3 mb-2 searchbar"
        >
          <div className="input-group mb-3 w-100">
            <div className="input-group-prepend">
              <span className="input-group-text bg-transparent border-bottom"><i className="fas fa-search"></i></span>
            </div>
            <input
              type="text"
              defaultValue=""
              onChange={e => handleOnchange(e)}
              className="form-control border-bottom"
              placeholder="Search lesson"
              aria-label="Search lesson"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <span className="input-group-text bg-white border-bottom">
                <i className="fas fa-arrow-right text-primary"></i>
              </span>
            </div>
          </div>
        </form>

        <div className="h-100 mt-1 mb-5">
          <span className="small">{(lessons.data && lessons.data.length) || '0' } Lessons Available</span>
          <div className="dropdown float-right">
            <button
              className="btn btn-transparent btn-sm dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default connect(
  null,
  { loadLessons }
)(HomePageHeader);
