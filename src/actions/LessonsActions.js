import * as types from '../actions/actionTypes';
import request from 'superagent';

export function loadLessonsListSuccess(lessons) {
  return {
    type: types.LOAD_LESSONS_LIST,
    lessons
  };
}
export function loadLessons() {
    return dispatch => {
      request.get('https://admin.vetti.co/rest/admin/v1/lessons').end((err, res) => {
        if (err) {
          throw (err);
        }
        const response = JSON.parse(res.text);
        dispatch(loadLessonsListSuccess(response));
        return;
      });
    };
  }