import React, { PropTypes } from 'react';
import CreateLessonHeader from '../create/CreateLessonHeader';
import CreateQuizContent from './CreateQuizContent'
import MainFooter from '../../common/footer/MainFooter';

const CreateQuizPage = () => {
    return (
     <div className="createQuiz">
       <CreateLessonHeader></CreateLessonHeader>
       <CreateQuizContent></CreateQuizContent>
       <MainFooter></MainFooter>
    </div>
    );
};
module.exports = CreateQuizPage;


