import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function lessons(state = initialState.lessons, action) {
  switch (action.type) {
    case types.LOAD_LESSONS_LIST:
      return action.lessons;
    default:
      return state;
  }
}