import * as types from "../actions/actionTypes";
import { coursesInitials } from "./initialState";

export default function courses(state = coursesInitials, action) {
  let newState = { ...state };
  const { type, payload } = action;
  switch (type) {
    case types.LOAD_COURSES_LIST:
      return { ...payload };
    case types.LOAD_COURSES_LOAD_MORE:
      return { ...newState, data: [...newState.data, ...payload.data] };
    default:
      return state;
  }
}
