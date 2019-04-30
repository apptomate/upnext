import * as types from "../actions/actionTypes";
import { addLessonInitials } from "./initialState";
import { sortByDisplayOrder } from "../actions";

export default function addLessons(state = addLessonInitials, action) {
  const { type, payload } = action;
  let slide = {},
    updatedSlides = [],
    slideIndex = null,
    section = {},
    updatedSections = [],
    sectionIndex = null;
  let newState = { ...state };
  switch (type) {
    case types.CLEAR_ADD_LESSON_VALUES:
      return addLessonInitials;

    case types.ADD_LESSON_SUCCESS:
      return { ...newState, ...payload };

    case types.CREATE_SLIDE_REQUEST_SUCCESS:
      if (newState.slides.length === 0) {
        return {
          ...newState,
          slides: [{ ...payload, sections: [] }],
          currentSlideHash: payload.hash || ""
        };
      }
      updatedSlides = [...newState.slides];
      slide = { ...payload, sections: [] };
      updatedSlides.push(slide);
      updatedSlides = sortByDisplayOrder(updatedSlides);
      return {
        ...newState,
        slides: [...updatedSlides],
        currentSlideHash: payload.hash || "",
        currentSlideSectionHash: ""
      };

    case types.SLIDE_SECTION_CREATE_REQUEST_SUCCESS:
      updatedSlides = newState.slides.filter(
        slide => payload.slideHash !== slide.hash
      );
      slide = newState.slides.find(slide => payload.slideHash === slide.hash);
      if (!slide.sections) {
        slide["sections"] = [];
      }
      slide.sections.push(payload.response);
      updatedSlides.push(slide);
      updatedSlides = sortByDisplayOrder(updatedSlides);
      return {
        ...newState,
        currentSlideSectionHash: payload.sectionHash,
        currentSlideHash: payload.slideHash,
        slides: updatedSlides
      };

    case types.SLIDE_SECTION_UPDATE_REQUEST_SUCCESS:
      console.warn("SLIDE_SECTION_UPDATE_REQUEST_SUCCESS", payload);
      updatedSlides = newState.slides.filter(
        slide => payload.slideHash !== slide.hash
      );
      slide = newState.slides.find(slide => payload.slideHash === slide.hash);
      sectionIndex = slide.sections.findIndex(
        section => section.hash === payload.sectionHash
      );
      if (sectionIndex !== -1) {
        slide.sections[sectionIndex] = payload.response;
      }
      // slide.data
      updatedSlides.push(slide);
      updatedSlides = sortByDisplayOrder(updatedSlides);
      return {
        ...newState,
        currentSlideSectionHash: payload.sectionHash,
        currentSlideHash: payload.slideHash,
        slides: updatedSlides
      };

    case types.LOAD_SLIDE_SECTION:
      let { currentSlideHash, currentSlideSectionHash } = newState;
      if (payload.slideHash) {
        slide = newState.slides.find(slide => payload.slideHash === slide.hash);
        section = (slide.sections && slide.sections[0]) || {};
        // if (slide && slide.sections.length > 0) {
        // section = newState.sections.find(section => payload.sectionHash === section.hash)
        // }
        currentSlideHash = slide.hash;
        currentSlideSectionHash = section.hash || "";
      }
      return {
        ...newState,
        currentSlideHash: currentSlideHash,
        currentSlideSectionHash: currentSlideSectionHash
      };
    case types.LOAD_LESSON_SUCCESS:
      return { ...payload };
    case types.LOAD_SLIDES_SUCCESS:
      let initialSlide = (payload.length > 0 && payload[0]) || {};
      let initialSection = initialSlide.section || {};
      // tempObj['slides'] = tempObj['data'] || []
      // delete tempObj['data']
      return {
        ...newState,
        slides: [...payload],
        currentSlideHash: initialSlide.hash,
        currentSlideSectionHash: initialSection.hash
      };
    // return state
    default:
      return newState;
  }
}
