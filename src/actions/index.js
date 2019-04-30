import * as types from "./actionTypes";
import Alert from "react-s-alert";
import request from "superagent";
import { alertInitials } from "../reducers/initialState";
import { serialize } from "../helpers/methods";

//lesson actions
export function loadLessonsListSuccess(payload) {
  return { type: types.LOAD_LESSONS_LIST, payload };
}
export function loadLessonsLoadMoreSuccess(payload) {
  return { type: types.LOAD_LESSONS_LOAD_MORE, payload };
}
export function loadLessonSuccess(payload) {
  return { type: types.LOAD_LESSON_SUCCESS, payload };
}
export function addLessonSuccess(payload) {
  return { type: types.ADD_LESSON_SUCCESS, payload };
}
export function editLessonSuccess(payload) {
  return { type: types.EDIT_LESSON_SUCCESS, payload };
}
export function clearAddLessonValues() {
  return { type: types.CLEAR_ADD_LESSON_VALUES };
}
export function deleteLessonSuccess(payload) {
  return { type: types.DELETE_LESSON_SUCCESS, payload };
}

//course actions
export function clearAddCourseValues() {
  return { type: types.CLEAR_ADD_COURSE_VALUES };
}

export function loadCoursesListSuccess(payload) {
  return { type: types.LOAD_COURSES_LIST, payload };
}
export function loadCoursesLoadMoreSuccess(payload) {
  return { type: types.LOAD_COURSES_LOAD_MORE, payload };
}
export function loadCourseSuccess(payload) {
  return { type: types.LOAD_COURSE_SUCCESS, payload };
}

//slide & sections
export function loadSlidesSuccess(payload = []) {
  return { type: types.LOAD_SLIDES_SUCCESS, payload };
}
export function createSlideRequestSuccess(payload) {
  return { type: types.CREATE_SLIDE_REQUEST_SUCCESS, payload };
}
export function slideSectionCreateRequestSuccess(payload) {
  return { type: types.SLIDE_SECTION_CREATE_REQUEST_SUCCESS, payload };
}
export function slideSectionUpdateRequestSuccess(payload) {
  return { type: types.SLIDE_SECTION_UPDATE_REQUEST_SUCCESS, payload };
}
export function loadSlideSectionSuccess(payload) {
  return { type: types.LOAD_SLIDE_SECTION, payload };
}

//video actions
export function videoCreateRequestSuccess(payload) {
  return { type: types.CREATE_VIDEO_REQUEST_SUCCESS, payload };
}
export function clearVideoValues() {
  return { type: types.CLEAR_VIDEO_VALUES };
}

// alerts
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
  return dispatch => {
    var apiURL = API_BASE_URL + "/admin/v1/lessons/" + lessonHash;
    request
      .get(apiURL)
      .set("Content-Type", "application/json")
      .then(res => {
        dispatch(loadLessonSuccess(res.body.data));
        if (loadSlides) {
          dispatch(loadSlidesByLessonHash(lessonHash));
        }
      })
      .catch(e => {
        console.error(e);
      });
  };
}
export function loadCourse(courseHash, loadSlides) {
  return dispatch => {
    var apiURL = API_BASE_URL + "/admin/v1/lessons/" + courseHash;
    request
      .get(apiURL)
      .set("Content-Type", "application/json")
      .then(res => {
        dispatch(loadCourseSuccess(res.body.data));
      })
      .catch(e => {
        console.error(e);
      });
  };
}

export function loadSlidesByLessonHash(lessonHash) {
  return dispatch => {
    var apiURL = API_BASE_URL + "/admin/v1/slides?lessonHash=" + lessonHash;
    request
      .get(apiURL)
      .set("Content-Type", "application/json")
      .then(res => {
        dispatch(loadSlidesSuccess(res.body.data));
      })
      .catch(e => {
        console.error(e);
      });
  };
}

export function loadCourses(params, loadMore = false) {
  let encodedParams = "";
  if (params) {
    encodedParams = serialize(params);
  }
  return dispatch => {
    request
      .get(API_BASE_URL + "/admin/v1/courses" + encodedParams)
      .end((err, res) => {
        if (err) {
          throw err;
        }
        const response = JSON.parse(res.text);
        if (!loadMore) {
          dispatch(loadCoursesListSuccess(response));
        } else {
          dispatch(loadCoursesLoadMoreSuccess(response));
        }
        return;
      });
  };
}
export function loadLessons(params, loadMore = false) {
  let encodedParams = "";
  if (params) {
    encodedParams = serialize(params);
  }
  return dispatch => {
    request
      .get(API_BASE_URL + "/admin/v1/lessons" + encodedParams)
      .end((err, res) => {
        if (err) {
          throw err;
        }
        const response = JSON.parse(res.text);
        if (!loadMore) {
          dispatch(loadLessonsListSuccess(response));
        } else {
          dispatch(loadLessonsLoadMoreSuccess(response));
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

export function addLesson(lessoninfo) {
  return dispatch => {
    var apiURL = API_BASE_URL + "/admin/v1/lessons";
    request
      .post(apiURL)
      .set("Content-Type", "application/json")
      .send(lessoninfo.lesson)
      .then(res => {
        AlertInfo(`Lesson - ${res.body.data.title || ""}  Created!`);
        dispatch(addLessonSuccess(res.body.data));
        return res.body.data.hash;
      })
      .catch(e => {
        AlertError("Unexpected Error - Try again");
        console.error(e);
      });
  };
}

export function editLesson(lessoninfo) {
  return dispatch => {
    var apiURL = API_BASE_URL + "/admin/v1/lessons/" + lessoninfo.lesson.hash;
    request
      .patch(apiURL)
      .set("Content-Type", "application/json")
      .send(lessoninfo.lesson)
      .then(res => {
        AlertInfo(`Lesson - ${res.body.data.title || ""}  Updated!`);
        dispatch(editLessonSuccess(res.body.data));
        return;
      })
      .catch(e => {
        AlertError("Unexpected Error - Try again");
        console.error(e);
      });
  };
}

export function deleteLesson(lessonHashID) {
  var apiURL =
    API_BASE_URL + "/admin/v1/lessons/" + lessonHashID + "/deactivate";
  return dispatch => {
    request
      .post(apiURL)
      .then(res => {
        AlertError(`Lesson deleted`);
        dispatch(loadLessons());
        return;
      })
      .catch(e => {
        console.error(e);
        AlertError("Error - Slide not deleted");
      });
  };
}

export function deleteCourse(courseHashID) {
  var apiURL =
    API_BASE_URL + "/admin/v1/courses/" + courseHashID + "/deactivate";
  return dispatch => {
    request
      .post(apiURL)
      .then(res => {
        AlertError(`Course deleted`);
        dispatch(loadCourses());
        return;
      })
      .catch(e => {
        console.error(e);
        AlertError("Error - Slide not deleted");
      });
  };
}

export function createSlideRequest(params) {
  return dispatch => {
    var apiURL = API_BASE_URL + "/admin/v1/slides";
    request
      .post(apiURL)
      .set("Content-Type", "application/json")
      .send(params)
      .then(res => {
        dispatch(createSlideRequestSuccess(res.body.data));
      });
  };
}

export function deleteSlideRequest(currentSlide, data) {
  return dispatch => {
    var apiURL = API_BASE_URL + "/admin/v1/slides/" + currentSlide.hash;
    request
      .delete(apiURL)
      .set("Content-Type", "application/json")
      .then(res => {
        AlertError(`Slide Deleted`);
        dispatch(loadSlidesByLessonHash(data.lessonHash));
      })
      .catch(e => {
        console.error(e);
        AlertError("Error - Slide not deleted");
      });
  };
}
export function slideSectionCreateRequest(hash, params) {
  return dispatch => {
    var apiURL = API_BASE_URL + "/admin/v1/slides/" + hash + "/slide-sections";
    request
      .post(apiURL)
      .set("Content-Type", "application/json")
      .send(params)
      .then(res => {
        let payload = {
          slideHash: hash,
          sectionHash: res.body.data.hash,
          response: res.body.data
        };
        AlertInfo("Slide Updated");
        dispatch(slideSectionCreateRequestSuccess(payload));
      })
      .catch(e => {
        AlertError("Error occured");
        console.error(e);
      });
  };
}

export function slideSectionUpdateRequest(
  currentSlideHash,
  currentSlideUpdateHash,
  params
) {
  return dispatch => {
    var apiURL =
      API_BASE_URL +
      "/admin/v1/slides/" +
      currentSlideHash +
      "/slide-sections/" +
      currentSlideUpdateHash;
    request
      .patch(apiURL)
      .set("Content-Type", "application/json")
      .send(params)
      .then(res => {
        let payload = {
          slideHash: currentSlideHash,
          sectionHash: res.body.data.hash,
          response: res.body.data
        };
        dispatch(slideSectionUpdateRequestSuccess(payload));
        AlertInfo("Slide Updated");
      })
      .catch(e => {
        console.error(e);
        AlertError("Error occurred");
      });
  };
}

export function videoCreateRequest(providerMediaID, videoProvider = "YOUTUBE") {
  let params = {
    provider: videoProvider,
    providerMediaId: providerMediaID,
    providerParamMap: {}
  };
  return dispatch => {
    var apiURL = API_BASE_URL + "/admin/v1/videos";
    request
      .post(apiURL)
      .set("Content-Type", "application/json")
      .send(params)
      .then(res => {
        console.log(res.body.data);
        dispatch(videoCreateRequestSuccess(res.body.data));
      })
      .catch(e => {
        console.error(e);
        AlertError("Error occurred");
      });
  };
}

export function sortByDisplayOrder(slides) {
  return slides.length > 1
    ? slides.sort((a, b) => a.displayOrder - b.displayOrder)
    : slides;
}
