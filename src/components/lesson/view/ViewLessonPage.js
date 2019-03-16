import React, { PropTypes } from 'react';
import ViewLessonHeader from './ViewLessonHeader';
import ViewLessonContent from './ViewLessonContent';

import '../../../assets/css/mystyle.css';
import '../../../assets/css/helper.css';
import '../../../assets/css/offcanvas.css';
import '../../../assets/css/upload-style.css';
import '../../../assets/js/offcanvas.js';
import '../../../assets/js/jquery-slim.min.js';
import '../../../assets/js/custom-file-input.js';


const ViewLessonPage = () => {
    return (
     <div className="viewLesson">
       <ViewLessonHeader></ViewLessonHeader>
       <ViewLessonContent></ViewLessonContent>
    </div>
    );
};
export default ViewLessonPage;


