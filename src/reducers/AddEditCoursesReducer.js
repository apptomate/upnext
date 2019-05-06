import * as types from "../actions/actionTypes";
import { coursesInitials } from "./initialState";

export default function courses(state = coursesInitials, action) {
  let newState = { ...state };
  const { type, payload } = action;
  switch (type) {
    case types.CLEAR_ADD_COURSE_VALUES:
      return coursesInitials;
    case types.LOAD_COURSE_SUCCESS:
      return { ...payload };
    case types.ADD_COURSE_SUCCESS:
      return { ...newState, ...payload };
    default:
      return state;
  }
}
