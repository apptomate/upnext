import React, { PropTypes, Component, Fragment } from "react";
var profileImg = require("../../../../../src/assets/images/profile.jpg");

class CreateCourseContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { title, description } = this.props;
    console.error(this.props);
    return (
      <Fragment>
        <div className="container">
          <br />
          <div className="row">
            <div className="col-lg-12">
              <h6 className="m-t-50 m-b-30">Course Title</h6>
              <form>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="form-control border-0 course_title rounded-0 p-l-0 p-r-0 m-b-10"
                  placeholder="What is this course called?"
                  defaultValue={title}
                />
              </form>
            </div>
            <div className="col-lg-12">
              <h6 className="m-t-50 m-b-20">Course Admin</h6>
              <div className="course_tutor">
                <img
                  src={profileImg}
                  className="rounded-circle float-left"
                  alt=""
                />
                <h6 className="p-t-10 m-b-5">Rakul Kumar Pradhan</h6>
                <p className="f-s-10">CEO, COURSE ADMIN</p>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 m-t-10 m-b-20">
              <button className="btn btn-link p-0">
                <i className="far fa-user-circle fa-lg f-s-30" />
                <span className="">Choose Another Admin</span>
              </button>
            </div>
            <div className="col-lg-12 m-b-100">
              <h6 className="m-t-50 m-b-20">Course Description</h6>
              <form action="">
                <div className="form-group">
                  <textarea
                    className="form-control border-bottom rounded-0 p-l-0 p-r-0"
                    name="description"
                    id="description"
                    cols="30"
                    rows="2"
                    placeholder="Describe something about this course"
                    defaultValue={description}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Let the learners read a little brief about it in 500 or less
                    words.
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CreateCourseContent;
