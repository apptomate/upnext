import * as types from '../actions/actionTypes';
import { lessonsInitials } from './initialState';

export default function lessons(state = lessonsInitials, action) {
  let newState = { ...state }
  const { type, payload } = action;
  switch (type) {
    case types.LOAD_LESSONS_LIST:
      return {...payload};
    case types.LOAD_LESSONS_LOAD_MORE:
      return { ...newState, data: [...newState.data, ...payload.data] }
    default:
      return state;
  }
}
