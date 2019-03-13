import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { debug } from 'util';

export default function lessons(state = initialState.lessons, action) {
  switch (action.type) {
    case types.LOAD_LESSONS_LIST:
      return action.lessons;
    case types.ADD_LESSON_SUCCESS:
      {
        var lessonresult = {
          lessonslist:
            [
              ...state.data,
              Object.assign({}, action.lesson)
            ]
        }
        return lessonresult;
      }
    default:
      return state;
  }
}