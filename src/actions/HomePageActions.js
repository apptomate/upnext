import * as types from './actionTypes';
import request from 'superagent';

export function loadInfoBoxesSuccess(infoboxes) {
  return { type: types.LOAD_INFOBOXES_SUCCESS, infoboxes };
}

export function loadMonthlyReportSuccess(monthlyreport) {
  return { type: types.LOAD_MONTHLYREPORT_SUCCESS, monthlyreport };
}

export function loadVisitorReportSuccess(visitorreport) {
  return { type: types.LOAD_VISITORREPORT_SUCCESS, visitorreport };
}

export function loadChatDataSuccess(chatdata) {
  return { type: types.LOAD_CHATMSG_SUCCESS, chatdata };
}

export function loadLatestMembersSuccess(latestmembers) {
  return { type: types.LOAD_LATESTMEMBERS_SUCCESS, latestmembers };
}

export function loadReport30DaysSuccess(report30days) {
  return { type: types.LOAD_REPORTFOR30DAYS_SUCCESS, report30days };
}

export function loadBrowserUsageSuccess(browserusage) {
  return { type: types.LOAD_BROWSERUSAGE_SUCCESS, browserusage };
}

export function loadInfoBoxes() {
  return dispatch => {
    request.get('https://api.myjson.com/bins/14me60.json').end((err, res) => {
      if (err) {
        throw (err);
      }
      const data = JSON.parse(res.text);
      dispatch(loadInfoBoxesSuccess(data));
      return;
    });
  };
}

export function loadMonthlyReport() {
  return dispatch => {
    request.get('https://api.myjson.com/bins/wgr6g.json').end((err, res) => {
      if (err) {
        throw (err);
      }
      const data = JSON.parse(res.text);
      dispatch(loadMonthlyReportSuccess(data));
      return;
    });
  };
}

export function loadVisitorReport() {
  return dispatch => {
    request.get('https://api.myjson.com/bins/suodw.json').end((err, res) => {
      if (err) {
        throw (err);
      }
      const data = JSON.parse(res.text);
      dispatch(loadVisitorReportSuccess(data));
      return;
    });
  };
}

export function loadChatData() {
  return dispatch => {
    request.get('https://api.myjson.com/bins/1dy1i0.json').end((err, res) => {
      if (err) {
        throw (err);
      }
      const data = JSON.parse(res.text);
      dispatch(loadChatDataSuccess(data));
      return;
    });
  };
}

export function loadLatestMembers() {
  return dispatch => {
    request.get('https://api.myjson.com/bins/smxrc.json').end((err, res) => {
      if (err) {
        throw (err);
      }
      const data = JSON.parse(res.text);
      dispatch(loadLatestMembersSuccess(data));
      return;
    });
  };
}

export function loadReport30Days() {
  return dispatch => {
    request.get('https://api.myjson.com/bins/kd0g8.json').end((err, res) => {
      if (err) {
        throw (err);
      }
      const data = JSON.parse(res.text);
      dispatch(loadReport30DaysSuccess(data));
      return;
    });
  };
}

export function loadBrowserUsage() {
  return dispatch => {
    request.get('https://api.myjson.com/bins/81ksk.json').end((err, res) => {
      if (err) {
        throw (err);
      }
      const data = JSON.parse(res.text);
      dispatch(loadBrowserUsageSuccess(data));
      return;
    });
  };
}