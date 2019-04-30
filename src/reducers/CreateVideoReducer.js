import * as types from "../actions/actionTypes";
import { lessonsInitials } from "./initialState";

export default function createVideo(state = {}, action) {
  let newState = { ...state };
  const { type, payload = {} } = action;
  switch (type) {
    case types.CREATE_VIDEO_REQUEST_SUCCESS:
      return { ...payload };
    case types.CLEAR_VIDEO_VALUES:
      return {};
    default:
      return newState;
  }
}
