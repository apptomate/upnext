import React, { PropTypes, Component } from "react";
import CreateCourseHeader from "./CreateCourseHeader";
import CreateCourseContent from "./createCourseContent/index";
import { connect } from "react-redux";
import {
  addCourse,
  editCourse,
  loadCourse,
  clearAddCourseValues
} from "../../../actions/";
import "../../../assets/css/mystyle.css";
import "../../../assets/css/helper.css";
import "../../../assets/css/offcanvas.css";
import "../../../assets/css/upload-style.css";
import "../../../assets/js/offcanvas.js";
import "../../../assets/js/jquery-slim.min.js";
import "../../../assets/js/custom-file-input.js";

class CreateCoursePage extends Component {
  constructor(props) {
    super(props);
    this.handleNavButton = this.handleNavButton.bind(this);

    this.props.clearAddCourseValues();
  }
  componentDidUpdate(prevProps, prevState) {
    // `debugg`er
    // if (title !== prevState.title) {
    //   let initSlide = slides[0];
    //   let currentSection = initSlide.sections[0] || {}
    //   let currentContent = (currentSection.content  || {})
    // currentContent = typeof currentContent === 'string' ? JSON.parse(currentContent) : currentContent
    // this.setState({ title : title})
    // }
  }
  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    if (params.hash) {
      this.props.loadCourse(params.hash, true);
    }
  }

  componentWillUnmount() {
    this.props.clearAddCourseValues();
  }
  handleNavButton() {}
  render() {
    console.warn(this.props, this.state);
    let { title, description } = this.props;
    return (
      <div className="d-flex flex-column h-100">
        <CreateCourseHeader
          handleNavButton={this.handleNavButton}
          {...this.props}
        />
        <CreateCourseContent
          title={title}
          description={description}
          {...this.props}
        />
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
)(CreateCoursePage);
