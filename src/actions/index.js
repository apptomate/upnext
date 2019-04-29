import * as types from './actionTypes';
import Alert from 'react-s-alert';
import request from 'superagent';
import { alertInitials } from '../reducers/initialState';
import { serialize } from '../helpers/methods';
// var URLSearchParams = require('url-search-params');

export function loadLessonsListSuccess(payload) {
  return { type: types.LOAD_LESSONS_LIST, payload }
}
export function loadLessonsLoadMoreSuccess(payload) {
  return { type: types.LOAD_LESSONS_LOAD_MORE, payload }
}
export function loadLessonSuccess(payload) {
  return { type: types.LOAD_LESSON_SUCCESS, payload }
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
export function loadSlidesSuccess(payload =[]) {
  return { type: types.LOAD_SLIDES_SUCCESS, payload }
}
export function createSlideRequestSuccess(payload) {
  return { type: types.CREATE_SLIDE_REQUEST_SUCCESS, payload }
}
export function slideSectionCreateRequestSuccess(payload) {
  return { type: types.SLIDE_SECTION_CREATE_REQUEST_SUCCESS, payload }
}
export function slideSectionUpdateRequestSuccess(payload) {
  return { type: types.SLIDE_SECTION_UPDATE_REQUEST_SUCCESS, payload }
}
export function loadSlideSectionSuccess(payload) {
  return { type: types.LOAD_SLIDE_SECTION, payload }
}
export function videoCreateRequestSuccess(payload){
  return { type: types.CREATE_VIDEO_REQUEST_SUCCESS, payload }
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

export function loadLesson(lessonHash, loadSlides) {
  // lessonHash = 'bdf801b5b023ba7bd920676f2281b83b459a62dd'
  // console.warn(lessonHash)
  return dispatch => {
    var apiURL = API_BASE_URL + '/admin/v1/lessons/' + lessonHash;
    request.get(apiURL)
      .set('Content-Type', 'application/json')
      .then(res => {
        // dispatch( (res.body.data));
        // AlertError(`Slide Deleted`)
        console.error('lesson loaded', res.body.data)
        dispatch(loadLessonSuccess(res.body.data));
        if (loadSlides) {
          dispatch(loadSlidesByLessonHash(lessonHash))
        }
      }).catch(e => {
        console.error(e);
        // AlertError('Error - Slide not deleted')
      });
  }
}

export function loadSlidesByLessonHash(lessonHash) {
  // console.warn(lessonHash)
  return dispatch => {
    var apiURL = API_BASE_URL + '/admin/v1/slides?lessonHash=' + lessonHash;
    request.get(apiURL)
      .set('Content-Type', 'application/json')
      .then(res => {
        // dispatch( (res.body.data));
        // AlertError(`Slide Deleted`)
        // console.error('slides loaded', res.body.data)
        dispatch(loadSlidesSuccess(res.body.data));
      }).catch(e => {
        console.error(e);
        // AlertError('Error - Slide not deleted')
      });
  }
}

export function loadLessons(params, loadMore=false) {
  let encodedParams = '';
  if(params) {
    encodedParams = serialize(params)
  }
  return dispatch => {
    request.get(API_BASE_URL + '/admin/v1/lessons'+ encodedParams).end((err, res) => {
      if (err) {
        throw (err);
      }
      const response = JSON.parse(res.text);
      if(!loadMore){
        dispatch(loadLessonsListSuccess(response));
      }else{
        dispatch(loadLessonsLoadMoreSuccess(response))
      }
      return;
    });
  };
}
export function loadSlideSection(payload) {
  return dispatch => {
    dispatch(loadSlideSectionSuccess(payload));
  };
}

// /rest/admin/v1/slides/{slideHash}/slide-sections
export function addLesson(lessoninfo) {
  // console.warn('----------->  addlesson', lessoninfo)
  return dispatch => {
    var apiURL = API_BASE_URL + '/admin/v1/lessons';
    request.post(apiURL)
      .set('Content-Type', 'application/json')
      .send(lessoninfo.lesson).then(res => {
        AlertInfo(`Lesson - ${res.body.data.title || ''}  Created!`)
        dispatch(addLessonSuccess(res.body.data));
        // dispatch(createSlideRequest({
        //   "lessonHash": res.body.data.hash,
        //   "layout": "TEXT",
        //   "displayOrder": 1
        // }))
        return res.body.data.hash;
      })
      .catch(e => {
        AlertError("Unexpected Error - Try again")
        console.error(e);
      });
  };
}

export function editLesson(lessoninfo) {
  // console.warn('----------->  editlesson', lessoninfo)
  return dispatch => {
    var apiURL = API_BASE_URL + '/admin/v1/lessons/' + lessoninfo.lesson.hash;
    request.patch(apiURL)
      .set('Content-Type', 'application/json')
      .send(lessoninfo.lesson).then(res => {
        AlertInfo(`Lesson - ${res.body.data.title || ''}  Updated!`)
        dispatch(editLessonSuccess(res.body.data));
        return;
      })
      .catch(e => {
        AlertError("Unexpected Error - Try again")
        console.error(e);
      });
  };
}

export function deleteLesson(lessonHashID) {
  var apiURL = API_BASE_URL + '/admin/v1/lessons/' + lessonHashID + '/deactivate';
  return dispatch => {
    request.post(apiURL).then((res) => {
      AlertError(`Lesson deleted`)
      dispatch(loadLessons())
      return;
    }).catch(e => {
      console.error(e);
      AlertError('Error - Slide not deleted')
    });
  };
}


export function createSlideRequest(params) {

  return dispatch => {
    var apiURL = API_BASE_URL + '/admin/v1/slides';
    request.post(apiURL)
      .set('Content-Type', 'application/json')
      .send(params).then(res => {
        dispatch(createSlideRequestSuccess(res.body.data));
      })
  }
}
// export function findPreviousSlide(slides, displayOrder){
//   let resultSlide = 0;
// }
export function deleteSlideRequest(currentSlide, data) {

  return dispatch => {
    var apiURL = API_BASE_URL + '/admin/v1/slides/' + currentSlide.hash;
    request.delete(apiURL)
      .set('Content-Type', 'application/json')
      .then(res => {
        AlertError(`Slide Deleted`)
        dispatch(loadSlidesByLessonHash(data.lessonHash))
      }).catch(e => {
        console.error(e);
        AlertError('Error - Slide not deleted')
      });
  }
}
export function slideSectionCreateRequest(hash, params) {
  // console.log(hash, params)
  // return;
  return dispatch => {
    var apiURL = API_BASE_URL + '/admin/v1/slides/' + hash + '/slide-sections';
    request.post(apiURL)
      .set('Content-Type', 'application/json')
      .send(params).then(res => {
        // console.log('slideSectionCreateRequestSuccess', res)
        let payload = {          // preserving response for future use
          slideHash: hash, // slide hash
          sectionHash: res.body.data.hash,
          data: {
            hash: res.body.data.hash, //section hash
            content: res.body.data.content,
            type: res.body.data.type,
          },
          response: res
        }
        AlertInfo("Slide Updated")
        dispatch(slideSectionCreateRequestSuccess(payload))
      }).catch(e => {
        AlertError('Error occured')
        console.error(e)
      })
  }
}

///rest/admin/v1/slides/{slideHash}/slide-sections
export function slideSectionUpdateRequest(currentSlideHash, currentSlideUpdateHash, params) {
  // console.log('slideSectionUpdateRequest', currentSlideHash, currentSlideUpdateHash, params)
  return dispatch => {
    var apiURL = API_BASE_URL + '/admin/v1/slides/' + currentSlideHash + '/slide-sections/' + currentSlideUpdateHash;
    // console.log(currentSlideHash, currentSlideUpdateHash, params, apiURL)
    request.patch(apiURL)
      .set('Content-Type', 'application/json')
      .send(params).then(res => {
        // console.log('slideSectionUpdateRequest', res)
        let payload = {          // preserving response for future use
          slideHash: currentSlideHash, // slide hash
          sectionHash: res.body.data.hash,
          data: {
            hash: res.body.data.hash, //section hash
            content: res.body.data.content,
            type: res.body.data.type,
          },
          response: res
        }
        dispatch(slideSectionUpdateRequestSuccess(payload))
        AlertInfo("Slide Updated")
      }).catch(e => {
        console.error(e)
        AlertError('Error occurred')
      })
  }
}

export function videoCreateRequest(providerMediaID,videoProvider = "YOUTUBE") {
  let params = {
    "provider": videoProvider,
    "providerMediaId": providerMediaID,
    "providerParamMap": {}
  }
    return dispatch => {
      var apiURL = API_BASE_URL + '/admin/v1/videos';
      request.post(apiURL)
        .set('Content-Type', 'application/json')
        .send(params).then(res => {
          dispatch(videoCreateRequestSuccess(res.body.data));
        }).catch(e =>{
          console.error(e);
          AlertError('Error occurred')}  
        )
    }
  }

export function sortByDisplayOrder(slides) {
  // console.log(111111111111111,slides)
  return slides.length > 1
    ? slides.sort((a, b) => a.displayOrder - b.displayOrder)
    : slides
} 
