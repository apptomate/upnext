import * as types from '../actions/actionTypes';
import { addLessonInitials } from './initialState';
import { debug } from 'util';

export default function addLessons(state = addLessonInitials, action) {
  const { type, payload } = action;
  let slide, updatedSlides, slideIndex, section, updatedSections, sectionIndex;
  let newState = { ...state };
  switch (type) {
    case types.CLEAR_ADD_LESSON_VALUES:
      return addLessonInitials;

    case types.ADD_LESSON_SUCCESS:
      return { ...newState, ...payload };

    case types.CREATE_SLIDE_REQUEST_SUCCESS:
      if (newState.slides.length === 0) {
        return { ...newState, slides: [{ ...payload, sections: [] }], currentSlideHash: payload.hash || '' }
      }
      updatedSlides = [...newState.slides]
      slide = { ...payload, sections: [] }
      updatedSlides.push(slide)
      return { ...newState, slides: [...updatedSlides], currentSlideHash: payload.hash || '', currentSlideSectionHash: '' };

    case types.SLIDE_SECTION_CREATE_REQUEST_SUCCESS:
      updatedSlides = newState.slides.filter(slide => payload.slideHash !== slide.hash)
      slide = newState.slides.find(slide => payload.slideHash === slide.hash)
      slide.sections.push(payload.data)
      updatedSlides.push(slide)
      return { ...newState, currentSlideSectionHash: payload.sectionHash, currentSlideHash: payload.slideHash, slides: updatedSlides }

    case types.SLIDE_SECTION_UPDATE_REQUEST_SUCCESS:
      console.warn(payload)
      updatedSlides = newState.slides.filter(slide => payload.slideHash !== slide.hash)
      slide = newState.slides.find(slide => payload.slideHash === slide.hash)
      sectionIndex = slide.sections.findIndex(section => section.hash === payload.sectionHash)
      if(sectionIndex !== -1){
        slide.sections[sectionIndex] = payload.data
      }
      // slide.data
      updatedSlides.push(slide)
      return { ...newState, currentSlideSectionHash: payload.sectionHash, currentSlideHash: payload.slideHash, slides: updatedSlides }
    // return state
    default:
      return newState;
  }
}