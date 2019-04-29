import { combineReducers } from "redux";
import lessons from "./LessonsReducer";
import courses from "./CoursesReducer";
import addLessons from "./AddEditLessonsReducer";
import createVideo from "./CreateVideoReducer";

const rootReducer = combineReducers({
  lessons,
  courses,
  addLessons,
  createVideo
});

export default rootReducer;
