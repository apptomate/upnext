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
  EDIT_COURSE_URI
} from "./helpers/constants";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/Home" component={HomePage} />
    <Route path="/course" component={CoursesHome} />
    <Route path="/CreateCourse" component={CreateCoursePage} />
    <Route path="/CreateLesson" component={CreateLessonPage} />
    <Route path={`${VIEW_LESSON_URI}/:hash`} component={ViewLessonPage} />
    <Route path={`${EDIT_LESSON_URI}/:hash`} component={CreateLessonPage} />
    <Route path={`${VIEW_COURSE_URI}/:hash`} component={ViewCoursePage} />
    <Route path={`${EDIT_COURSE_URI}/:hash`} component={CreateCoursePage} />
    <Route path="/CreateQuiz" component={CreateQuizPage} />
    <Route path="/PublishLesson" component={PublishLessonPage} />
    <Route path="/Dashboard" component={DashboardPage} />
  </Switch>
);
export default Routes;
