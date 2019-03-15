import React, { PropTypes } from 'react';
import CreateLessonHeader from './CreateLessonHeader';
import CreateLessonContent from './CreateLessonContent';
import MainFooter from '../../common/footer/MainFooter';
import * as managelessonsActions from '../../../actions/LessonsActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import '../../../assets/css/mystyle.css';
import '../../../assets/css/helper.css';
import '../../../assets/css/offcanvas.css';
import '../../../assets/css/upload-style.css';
import '../../../assets/js/offcanvas.js';
import '../../../assets/js/jquery-slim.min.js';
import '../../../assets/js/custom-file-input.js';


class CreateLessonPage extends React.Component {
  constructor(props, context) {
    super(props, context);
}
  render() {
    return (
     <div className="createLesson">
       <CreateLessonHeader props={this.props}></CreateLessonHeader>
       <CreateLessonContent {...this.props}></CreateLessonContent>
       <MainFooter></MainFooter>
    </div>
    )
  }
};
export default CreateLessonPage;


