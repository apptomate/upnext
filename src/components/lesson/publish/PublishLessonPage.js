import React, { PropTypes } from 'react';
import PublishLessonHeader from './PublishLessonHeader';
import PublishLessonContent from './PublishLessonContent';
import MainFooter from '../../common/footer/MainFooter';

import '../../../assets/css/mystyle.css';
import '../../../assets/css/helper.css';
import '../../../assets/css/offcanvas.css';
import '../../../assets/css/upload-style.css';
import '../../../assets/js/offcanvas.js';
import '../../../assets/js/jquery-slim.min.js';
import '../../../assets/js/custom-file-input.js';


const PublishLessonPage = () => {
    return (
     <div className="publishLesson">
       <PublishLessonHeader></PublishLessonHeader>
       <PublishLessonContent></PublishLessonContent>
       <MainFooter></MainFooter>
    </div>
    );
};
module.exports = PublishLessonPage;


