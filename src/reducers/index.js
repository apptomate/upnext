import { combineReducers } from "redux";
import lessons from "./LessonsReducer";
import courses from "./CoursesReducer";
import addCourses from "./AddEditCoursesReducer";
import addLessons from "./AddEditLessonsReducer";
import createVideo from "./CreateVideoReducer";

const rootReducer = combineReducers({
  lessons,
  courses,
  addLessons,
  createVideo,
  addCourses
});

export default rootReducer;
