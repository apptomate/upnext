import React, { PropTypes } from 'react';
import CreateLessonHeader from '../create/CreateLessonHeader';
import CreateQuizContent from './CreateQuizContent'
import MainFooter from '../../common/footer/MainFooter';

class CreateQuizPage extends React.Component {
  constructor(props) {
      super(props)
  }
  render() {
    return (
     <div className="createQuiz">
       <CreateLessonHeader props={this.props}></CreateLessonHeader>
       <CreateQuizContent></CreateQuizContent>
       <MainFooter></MainFooter>
    </div>
    )
  }
};
module.exports = CreateQuizPage;


