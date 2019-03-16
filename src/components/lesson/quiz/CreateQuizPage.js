import React, { PropTypes } from 'react';
import CreateLessonHeader from '../create/CreateLessonHeader';
import CreateQuizContent from './CreateQuizContent'

class CreateQuizPage extends React.Component {
  constructor(props) {
      super(props)
  }
  render() {
    return (
     <div className="createQuiz">
       <CreateLessonHeader props={this.props}></CreateLessonHeader>
       <CreateQuizContent></CreateQuizContent>
    </div>
    )
  }
};
export default CreateQuizPage;


