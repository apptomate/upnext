import * as types from '../actions/actionTypes';
import { addLessonInitials } from './initialState';
import { debug } from 'util';

export default function addLessons(state = addLessonInitials, action) {
  const { type, payload } = action;
  switch (type) {
    case types.CLEAR_ADD_LESSON_VALUES:
      return addLessonInitials;

    case types.ADD_LESSON_SUCCESS:
      return { ...state, ...payload };

    case types.CREATE_SLIDE_REQUEST_SUCCESS:
      let newState = { ...state };
      if (newState.slides.length === 0) {
        newState = { ...newState, slides: [{ ...payload, content: '' }] }
      }
      return { ...newState, currentSlideHash: payload.hash || '' };

    case types.SLIDE_SECTION_CREATE_REQUEST_SUCCESS:
      let updatedSlides = state.slides.filter(slide => payload.hash !== slide.hash)
      let slide = state.slides.find(slide => payload.hash === slide.hash)
      slide = { ...slide, updateHash: payload.updateHash }
      updatedSlides.push(slide)
      return { ...state, currentSlideUpdateHash: payload.updateHash, slides: updatedSlides }

    default:
      return state;
  }
}