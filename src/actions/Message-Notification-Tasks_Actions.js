import * as types from './actionTypes';
import request from 'superagent';

export function loadMessagesSuccess(messages) {
  return { type: types.LOAD_MESSAGES_SUCCESS, messages };
}

export function loadNotificationSuccess(notifications) {
  return { type: types.LOAD_NOTIFICATIONS_SUCCESS, notifications };
}

export function loadTaskSuccess(tasks) {
  return { type: types.LOAD_TASKS_SUCCESS, tasks };
}

export function loadUserProfileSuccess(userprofile) {
  return { type: types.LOAD_USERDETAILS_SUCCESS, userprofile };
}


export function loadMessages() {
  return dispatch => {
    request.get('https://api.myjson.com/bins/iyuw8.json').end((err, res) => {
      if (err) {
        throw (err);
      }
      const data = JSON.parse(res.text);
      dispatch(loadMessagesSuccess(data));
      return;
    });
  };
}

export function loadNotifications() {
  return dispatch => {
    request.get('https://api.myjson.com/bins/akmhs.json').end((err, res) => {
      if (err) {
        throw (err);
      }
      const data = JSON.parse(res.text);
      dispatch(loadNotificationSuccess(data));
      return;
    });
  };
}

export function loadTasks() {
  return dispatch => {
    request.get('https://api.myjson.com/bins/jk9q8.json').end((err, res) => {
      if (err) {
        throw (err);
      }
      const data = JSON.parse(res.text);
      dispatch(loadTaskSuccess(data));
      return;
    });
  };
}

export function loadUserProfile() {
  return dispatch => {
    request.get('https://api.myjson.com/bins/kr5pk.json').end((err, res) => {
      if (err) {
        throw (err);
      }
      const data = JSON.parse(res.text);
      dispatch(loadUserProfileSuccess(data));
      return;
    });
  };
}
