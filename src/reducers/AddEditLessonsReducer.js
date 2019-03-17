import * as types from '../actions/actionTypes';
import { addLessonInitials } from './initialState';
import { debug } from 'util';

export default function addLessons(state = addLessonInitials, action) {
  switch (action.type) {
    case types.CLEAR_ADD_LESSON_VALUES:
      return addLessonInitials;
    case types.ADD_LESSON_SUCCESS:
      return { ...state, ...action.payload };
    case types.CREATE_SLIDE_REQUEST_SUCCESS:
      let newState = { ...state };
      console.log(1111, newState)
      if (newState.slides.length === 0) {
        console.log('ulla varudhu')
        newState = { ...newState, slides: [action.payload] }
      }
      console.log(newState)
      return { ...newState, currentSlide: { ...action.payload } };
    default:
      return state;
  }
}