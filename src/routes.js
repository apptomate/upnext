import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './components/login/LoginPage';
import HomePage from './components/home/HomePage';
import CreateLessonPage from './components/lesson/create/CreateLessonPage';
import CreateQuizPage from './components/lesson/quiz/CreateQuizPage';
import ViewLessonPage from './components/lesson/view/ViewLessonPage';
import PublishLessonPage from './components/lesson/publish/PublishLessonPage';
import DashboardPage from './components/dashboard/DashboardPage';
import { EDIT_LESSON_URI } from './helpers/constants';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/Home" component={HomePage} />
    <Route path="/CreateLesson" component={CreateLessonPage} />
    <Route path={`${EDIT_LESSON_URI}/:hash`} component={CreateLessonPage} />
    <Route path="/CreateQuiz" component={CreateQuizPage} />    
    <Route path="/ViewLesson" component={ViewLessonPage} />
    <Route path="/PublishLesson" component={PublishLessonPage} />
    <Route path="/Dashboard" component={DashboardPage} />
  </Switch>
);
export default Routes;