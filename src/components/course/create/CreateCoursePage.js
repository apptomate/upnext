import React, { PropTypes } from "react";
import CreateCourseHeader from "./CreateCourseHeader";
import CreateCourseContent from "./createCourseContent/index";

import "../../../assets/css/mystyle.css";
import "../../../assets/css/helper.css";
import "../../../assets/css/offcanvas.css";
import "../../../assets/css/upload-style.css";
import "../../../assets/js/offcanvas.js";
import "../../../assets/js/jquery-slim.min.js";
import "../../../assets/js/custom-file-input.js";

class CreateCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="d-flex flex-column h-100">
        <CreateCourseHeader {...this.props} />
        <CreateCourseContent {...this.props} />
      </div>
    );
  }
}
export default CreateCoursePage;
