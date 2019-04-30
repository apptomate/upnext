import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./components/login/LoginPage";
import HomePage from "./components/home/HomePage";
import CoursesHome from "./components/course/HomePage";
import ViewLessonPage from "./components/lesson/view/ViewLessonPage";
import CreateLessonPage from "./components/lesson/create/CreateLessonPage";
import ViewCoursePage from "./components/course/view/ViewCoursePage";
import CreateCoursePage from "./components/course/create/CreateCoursePage";
import CreateQuizPage from "./components/lesson/quiz/CreateQuizPage";
import PublishLessonPage from "./components/lesson/publish/PublishLessonPage";
import DashboardPage from "./components/dashboard/DashboardPage";
import {
  EDIT_LESSON_URI,
  VIEW_LESSON_URI,
  VIEW_COURSE_URI,
  EDIT_COURSE_URI,
  COURSE_HOME_URI,
  CREATE_COURSE_URI,
  CREATE_LESSON_URI,
  CREATE_QUIZ_URI,
  PUBLISH_LESSON_URI,
  DASHBOARD_URI
} from "./helpers/constants";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/home" component={HomePage} />
    <Route path={COURSE_HOME_URI} component={CoursesHome} />
    <Route path={CREATE_COURSE_URI} component={CreateCoursePage} />
    <Route path={CREATE_LESSON_URI} component={CreateLessonPage} />
    <Route path={`${VIEW_LESSON_URI}/:hash`} component={ViewLessonPage} />
    <Route path={`${EDIT_LESSON_URI}/:hash`} component={CreateLessonPage} />
    <Route path={`${VIEW_COURSE_URI}/:hash`} component={ViewCoursePage} />
    <Route path={`${EDIT_COURSE_URI}/:hash`} component={CreateCoursePage} />
    <Route path={CREATE_QUIZ_URI} component={CreateQuizPage} />
    <Route path={PUBLISH_LESSON_URI} component={PublishLessonPage} />
    <Route path={DASHBOARD_URI} component={DashboardPage} />
  </Switch>
);
export default Routes;
