import * as types from './actionTypes';
import Alert from 'react-s-alert';
import request from 'superagent';
import { alertInitials } from '../reducers/initialState';
// var URLSearchParams = require('url-search-params');

export function loadLessonsListSuccess(lessons) {
  return { type: types.LOAD_LESSONS_LIST, payload: lessons }
}

export function addLessonSuccess(lesson) {
  return { type: types.ADD_LESSON_SUCCESS, payload: lesson }
}

export function editLessonSuccess(lesson) {
  return { type: types.EDIT_LESSON_SUCCESS, payload: lesson }
}
export function clearAddLessonValues(lesson) {
  return { type: types.CLEAR_ADD_LESSON_VALUES }
}
export function deleteLessonSuccess(lesson) {
  return { type: types.DELETE_LESSON_SUCCESS, lesson }
}


export function AlertError(message) {
  if (message) {
    Alert.error(message, alertInitials);
  }
  return true;
}

export function AlertInfo(message) {
  if (message) {
    Alert.info(message, alertInitials);
  }
  return true;
}

export function loadLessons() {
  return dispatch => {
    request.get('/rest/admin/v1/lessons').end((err, res) => {
      if (err) {
        throw (err);
      }
      const response = JSON.parse(res.text);
      dispatch(loadLessonsListSuccess(response));
      return;
    });
  };
}

export function addLesson(lessoninfo) {
  console.warn('----------->  addlesson', lessoninfo)
  return dispatch => {
    var apiURL = '/rest/admin/v1/lessons';
    request.post(apiURL)
      .set('Content-Type', 'application/json')
      .send(lessoninfo.lesson).then(res => {
        AlertInfo(`Lesson - ${res.body.data.title || ''}  Created!`)
        dispatch(addLessonSuccess(res.body.data));
        return res.body.data.hash;
      })
      .catch(error => {
        AlertError("Unexpected Error - Try again")
        console.log(error);
      });
  };
}

export function editLesson(lessoninfo) {
  console.warn('----------->  editlesson', lessoninfo)
  return dispatch => {
    var apiURL = '/rest/admin/v1/lessons/' + lessoninfo.lesson.hash;
    request.patch(apiURL)
      .set('Content-Type', 'application/json')
      .send(lessoninfo.lesson).then(res => {
        AlertInfo(`Lesson - ${res.body.data.title || ''}  Updated!`)
        dispatch(editLessonSuccess(res.body.data));
        return;
      })
      .catch(error => {
        AlertError("Unexpected Error - Try again")
        console.log(error);
      });
  };
}

export function deleteLesson(lessonHashID) {
  var apiURL = 'https://admin.vetti.co/rest/admin/v1/lessons/' + lessonHashID + '/deactivate';
  return dispatch => {
    request.post(apiURL).end((err, res) => {
      if (err) {
        throw (err);
      }
      const response = JSON.parse(res.text);
      dispatch(deleteLessonSuccess(response));
      return;
    });
  };
}