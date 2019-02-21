import React, { PropTypes } from 'react';
import CreateLessonHeader from './CreateLessonHeader';
import CreateLessonContent from './CreateLessonContent';
import MainFooter from '../../common/footer/MainFooter';

import '../../../assets/css/mystyle.css';
import '../../../assets/css/helper.css';
import '../../../assets/css/offcanvas.css';
import '../../../assets/css/upload-style.css';
import '../../../assets/js/offcanvas.js';
import '../../../assets/js/jquery-slim.min.js';
import '../../../assets/js/custom-file-input.js';


const CreateLessonPage = () => {
    return (
     <div className="createLesson">
       <CreateLessonHeader></CreateLessonHeader>
       <CreateLessonContent></CreateLessonContent>
       <MainFooter></MainFooter>
    </div>
    );
};
module.exports = CreateLessonPage;


