import * as types from '../actions/actionTypes';
import {lessonsInitials} from './initialState';

export default function lessons(state = lessonsInitials, action) {
  switch (action.type) {
    case types.LOAD_LESSONS_LIST:
      return action.payload;
    default:
      return state;
  }
}
