import * as types from '../actions/actionTypes';
import request from 'superagent';
import axios from 'axios';
var URLSearchParams = require('url-search-params');

export function loadLessonsListSuccess(lessons) {
  return { type: types.LOAD_LESSONS_LIST, lessons }
}

export function addLessonSuccess(lesson) {
  return { type: types.ADD_LESSON_SUCCESS, lesson }
}

export function editLessonSuccess(lesson) {
  return { type: types.EDIT_LESSON_SUCCESS, lesson }
}

export function deleteLessonSuccess(lesson) {
  return { type: types.DELETE_LESSON_SUCCESS, lesson }
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

export function addLesson(lessoninfo) {
  alert('adding a new lesson');
  return dispatch => {
    const params = new URLSearchParams();
    params.append('bgColor', lessoninfo.lesson.bgcolor);
    params.append('slideBgColor', lessoninfo.lesson.slidebgcolor);
    params.append('title', lessoninfo.lesson.title);

    var apiURL = 'https://admin.vetti.co/rest/admin/v1/lessons';
    request.post(apiURL)
      .set('Content-Type', 'application/json')
      .send(params.toString()).then(response => {
        alert(response.data.hash);
        return;
      })
      .catch(error => {
        console.log(error);
      });

     // (OR)

    // var headers = {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/x-www-form-urlencoded'
    // };
    // const params = new URLSearchParams();
    // params.append('bgColor', lessoninfo.lesson.bgcolor);
    // params.append('slideBgColor', lessoninfo.lesson.slidebgcolor);
    // params.append('title', lessoninfo.lesson.title);

    // var apiURL = 'https://admin.vetti.co/rest/admin/v1/lessons';
    // axios.post(apiURL, params.toString(), { headers: headers })
    //     .then(response => {
    //         alert(response.data.hash);
    //         return;
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
  };
}

export function editLesson(lessoninfo) {
  return dispatch => {
    const params = new URLSearchParams();
    params.append('bgColor', lessoninfo.lesson.bgcolor);
    params.append('slideBgColor', lessoninfo.lesson.slidebgcolor);
    params.append('title', lessoninfo.lesson.title);

    var apiURL = 'https://admin.vetti.co/rest/admin/v1/lessons/' + lessoninfo.lesson.hash;
    request.post(apiURL)
      .set('Content-Type', 'application/json')
      .send(params.toString()).then(response => {
        return;
      })
      .catch(error => {
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