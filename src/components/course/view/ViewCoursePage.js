import React, { PropTypes, Component } from "react";
import { loadLesson, clearAddLessonValues } from "../../../actions";
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

class ViewLessonPage extends Component {
  constructor(props) {
    super(props);
    // let initialState = { blurEffect: true, title: '', currentContent: {}, currentSlide: { layout: 'TEXT', displayOrder: 1, sections: [] }, currentSection: {} }
    // const { hash, title } = this.props;
    // this.loadSlide = this.loadSlide.bind(this)
    this.props.clearAddLessonValues();
    scroll(top);
  }
  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    if (params.hash) {
      // const { hash } = match.params
      this.props.loadLesson(params.hash, true);
    }
  }

  componentWillUnmount() {
    this.props.clearAddLessonValues();
  }

  render() {
    // console.log(this.state, this.props);
    const { hash = "", slides = [], title = "" } = this.props;
    return (
      <div className="viewLesson">
        <ViewCourseHeader {...this.props} lessonHash={hash} slides={slides} />
        <ViewCourseContent
          {...this.props}
          lessonHash={hash}
          slides={slides}
          title={title}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.addLessons.title,
    hash: state.addLessons.hash,
    // currentSlideHash: state.addLessons.currentSlideHash,
    // currentSlideSectionHash: state.addLessons.currentSlideSectionHash,
    slides: state.addLessons.slides
  };
};

const actionsToDispatch = {
  loadLesson,
  clearAddLessonValues
};
export default connect(
  mapStateToProps,
  actionsToDispatch
)(ViewLessonPage);
