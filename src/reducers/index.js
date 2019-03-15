import { combineReducers } from 'redux';
import lessons from "./LessonsReducer";
import addLessons from "./AddEditLessonsReducer";

const rootReducer = combineReducers({
    lessons,
    addLessons
});

export default rootReducer;
