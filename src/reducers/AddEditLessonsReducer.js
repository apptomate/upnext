import * as types from '../actions/actionTypes';
import { addLessonInitials } from './initialState';
import { debug } from 'util';

export default function addLessons(state = addLessonInitials, action) {
  const { type, payload } = action;
  let updatedSlides, slide;
  let newState = { ...state };
  switch (type) {
    case types.CLEAR_ADD_LESSON_VALUES:
      return addLessonInitials;

    case types.ADD_LESSON_SUCCESS:
      return { ...newState, ...payload };

    case types.CREATE_SLIDE_REQUEST_SUCCESS:
      if (newState.slides.length === 0) {
        return { ...newState,  slides: [{ ...payload, content: '' }], currentSlideHash: payload.hash || '' }
      }
      updatedSlides = [...newState.slides]
      slide={ ...payload, content: '' }
      updatedSlides.push(slide)
      return { ...newState, slides: [...updatedSlides],currentSlideUpdateHash:'', currentSlideHash: payload.hash || '' };

    case types.SLIDE_SECTION_CREATE_REQUEST_SUCCESS:
      updatedSlides = newState.slides.filter(slide => payload.hash !== slide.hash)
      slide = newState.slides.find(slide => payload.hash === slide.hash)
      slide = { ...slide, content:payload.content, updateHash: payload.updateHash }
      updatedSlides.push(slide)
      return { ...newState, currentSlideUpdateHash: payload.updateHash, slides: updatedSlides }
      
    case types.SLIDE_SECTION_UPDATE_REQUEST_SUCCESS:
      updatedSlides = newState.slides.filter(slide => payload.hash !== slide.hash)
      slide = newState.slides.find(slide => payload.hash === slide.hash)
      slide = { ...slide, content:payload.content, updateHash: payload.updateHash }
      updatedSlides.push(slide)
      return { ...newState, currentSlideUpdateHash: payload.updateHash, slides: updatedSlides }
    // return state
    default:
      return newState;
  }
}