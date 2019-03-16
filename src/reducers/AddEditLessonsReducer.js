import * as types from '../actions/actionTypes';
import { addLessonInitials } from './initialState';
import { debug } from 'util';

export default function addLessons(state = addLessonInitials, action) {
  switch (action.type) {
    case types.CLEAR_ADD_LESSON_VALUES:
      return addLessonInitials;
    case types.ADD_LESSON_SUCCESS:
      return { ...action.payload };
    default:
      return state;
  }
}