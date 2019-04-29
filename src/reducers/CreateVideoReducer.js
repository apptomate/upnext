import * as types from "../actions/actionTypes";
import { lessonsInitials } from "./initialState";

export default function createVideo(state = {}, action) {
  let newState = { ...state };
  const { type, payload = {} } = action;
  switch (type) {
    case types.CREATE_VIDEO_REQUEST_SUCCESS:
      return { ...(payload.data || {}) };
    // case types.LOAD_LESSONS_LOAD_MORE:
    //   return { ...newState, data: [...newState.data, ...payload.data] }
    default:
      return state;
  }
}
