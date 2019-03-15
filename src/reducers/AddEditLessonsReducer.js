import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { debug } from 'util';

export default function addLessons(state = initialState.addLesson, action) {
  switch (action.type) {
    case types.CLEAR_ADD_LESSON_VALUES:
      return initialState.addLesson;
    case types.ADD_LESSON_SUCCESS:
      {
        console.warn(action.payload)
        return { ...action.payload };
      }
    default:
      return state;
  }
}