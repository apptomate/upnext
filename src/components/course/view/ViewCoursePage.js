import React, { PropTypes, Component } from "react";
import { loadCourse, clearAddCourseValues } from "../../../actions";
import { connect } from "react-redux";
import ViewCourseHeader from "./ViewCourseHeader";
import ViewCourseContent from "./ViewCourseContent";

import "../../../assets/css/mystyle.css";
import "../../../assets/css/helper.css";
import "../../../assets/css/offcanvas.css";
import "../../../assets/css/upload-style.css";
import "../../../assets/js/offcanvas.js";
import "../../../assets/js/jquery-slim.min.js";
import "../../../assets/js/custom-file-input.js";

class ViewCoursePage extends Component {
  constructor(props) {
    super(props);
    this.props.clearAddCourseValues();
    scroll(top);
  }
  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    if (params.hash) {
      console.log(this.props, params);
      // const { hash } = match.params
      this.props.loadCourse(params.hash, true);
    }
  }

  componentWillUnmount() {
    this.props.clearAddCourseValues();
  }

  render() {
    // console.log(this.state, this.props);
    const { hash = "", title = "" } = this.props;
    return (
      <div className="viewCourse">
        <ViewCourseHeader {...this.props} courseHash={hash} />
        <ViewCourseContent {...this.props} courseHash={hash} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.addCourses.title,
    hash: state.addCourses.hash,
    description: state.addCourses.description,
    duration: state.addCourses.duration
  };
};

const actionsToDispatch = {
  loadCourse,
  clearAddCourseValues
};
export default connect(
  mapStateToProps,
  actionsToDispatch
)(ViewCoursePage);
