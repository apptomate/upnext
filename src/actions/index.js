import * as types from './actionTypes';
import Alert from 'react-s-alert';
import request from 'superagent';
import { alertInitials } from '../reducers/initialState';
// var URLSearchParams = require('url-search-params');

export function loadLessonsListSuccess(payload) {
  return { type: types.LOAD_LESSONS_LIST, payload }
}

export function addLessonSuccess(payload) {
  return { type: types.ADD_LESSON_SUCCESS, payload }
}

export function editLessonSuccess(payload) {
  return { type: types.EDIT_LESSON_SUCCESS, payload }
}
export function clearAddLessonValues() {
  return { type: types.CLEAR_ADD_LESSON_VALUES }
}
export function deleteLessonSuccess(payload) {
  return { type: types.DELETE_LESSON_SUCCESS, payload }
}
export function createSlideRequestSuccess(payload) {
  return { type: types.CREATE_SLIDE_REQUEST_SUCCESS, payload }
}
export function slideSectionCreateRequestSuccess(payload) {
  return { type: types.SLIDE_SECTION_CREATE_REQUEST_SUCCESS, payload }
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

export function createSlideRequest(params) {

  return dispatch => {
    var apiURL = '/rest/admin/v1/slides';
    request.post(apiURL)
      .set('Content-Type', 'application/json')
      .send(params).then(res => {
        dispatch( createSlideRequestSuccess(res.body.data));
      })
  }
}

export function deleteSlideRequest(slideHash) {

  return dispatch => {
    var apiURL = '/rest/admin/v1/slides/' + slideHash;
    request.delete(apiURL)
      .set('Content-Type', 'application/json')
      .then(res => {
        // dispatch( (res.body.data));
        AlertError(`Slide Deleted`)
        console.error('slide deleted', res.body.data)
      })
  }
}
export function slideSectionCreateRequest(hash, params){
  console.log(hash, params)
  // return;
  return dispatch => {
    var apiURL = '/rest/admin/v1/slides/' + hash + '/slide-sections';
    request.post(apiURL)
      .set('Content-Type', 'application/json')
      .send(params).then(res => {
        console.log('jaksjdhflajsdljfashldkj', res)
        let data = {
          hash : hash,
          updateHash : res.body.data.hash
        }
        dispatch(slideSectionCreateRequestSuccess(data))
      })
  }
}
// /rest/admin/v1/slides/{slideHash}/slide-sections
export function addLesson(lessoninfo) {
  console.warn('----------->  addlesson', lessoninfo)
  return dispatch => {
    var apiURL = '/rest/admin/v1/lessons';
    request.post(apiURL)
      .set('Content-Type', 'application/json')
      .send(lessoninfo.lesson).then(res => {
        AlertInfo(`Lesson - ${res.body.data.title || ''}  Created!`)
        dispatch(addLessonSuccess(res.body.data));
        dispatch(createSlideRequest({
          "lessonHash": res.body.data.hash,
          "layout": "TEXT",
          "displayOrder": 1
        }))
        return res.body.data.hash;
      })
      .catch(error => {
        // AlertError("Unexpected Error - Try again")
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
  var apiURL = '/rest/admin/v1/lessons/' + lessonHashID + '/deactivate';
  return dispatch => {
    request.post(apiURL).then((res) => {
      AlertError(`Lesson deleted`)
      dispatch(loadLessons())
      return;
    });
  };
}