import { combineReducers } from 'redux';
import lessons from "./LessonsReducer";

const rootReducer = combineReducers({
    lessons
});

export default rootReducer;
