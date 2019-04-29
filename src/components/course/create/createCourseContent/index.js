import React, { PropTypes, Component, Fragment } from "react";
var profileImg = require("../../../../../src/assets/images/profile.jpg");
import { connect } from "react-redux";
import {
  addLesson,
  editLesson,
  loadLesson,
  clearAddLessonValues,
  createSlideRequest,
  deleteSlideRequest,
  slideSectionCreateRequest,
  slideSectionUpdateRequest,
  loadSlideSection,
  AlertError,
  videoCreateRequest
} from "../../../../actions/";
import shortid from "shortid";
import EditorOptions from "./editorOptions";
import SectionTypes from "./SectionTypes";
import SlideThumbnails from "./slideThumbnails";
import TextSection from "./sectionForms/TextSection";
import VideoSection from "./sectionForms/VideoSection";
// import "react-quill/dist/quill.snow.css";
import ExpandRight from "../../../../assets/images/expandRight.png";
import { fadeIn } from "react-animations";
// import { EDIT_LESSON_URI } from '../../../helpers/constants';

class CreateCourseContent extends Component {
  //   const { hash, title } = this.props;
  //   this.loadSlide = this.loadSlide.bind(this);
  //   this.handleTitleOnblur = this.handleTitleOnblur.bind(this);
  //   this.handleSlideInputs = this.handleSlideInputs.bind(this);
  //   this.handleSlideInputBlur = this.handleSlideInputBlur.bind(this);
  //   this.handleAddSlideButton = this.handleAddSlideButton.bind(this);
  //   this.openSectionTypes = this.openSectionTypes.bind(this);
  //   this.closeSectionTypes = this.closeSectionTypes.bind(this);
  //   this.createSlideRequestButton = this.createSlideRequestButton.bind(this);
  //   this.handleVideoSlideInputBlur = this.handleVideoSlideInputBlur.bind(this);
  //   this.handleVideoSlideInputs = this.handleVideoSlideInputs.bind(this);
  //   // this.createSlideRequestButton = this.createSlideRequestButton.bind(this)
  //   this.props.clearAddLessonValues();
  //   // console.error(this.props)
  //   this.state = initialState;
  //   scroll(top);
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   // `debugg`er
  //   const { hash, currentSlideHash, slides } = this.props;
  //   if (this.state.blurEffect && hash) {
  //     this.setState({ blurEffect: false });
  //   }
  //   if (
  //     this.props.currentSlideHash &&
  //     currentSlideHash !== prevProps.currentSlideHash
  //   ) {
  //     this.loadSlide(this.props.currentSlideHash);
  //   }
  //   // if (title !== prevState.title) {
  //   //   let initSlide = slides[0];
  //   //   let currentSection = initSlide.sections[0] || {}
  //   //   let currentContent = (currentSection.content  || {})
  //   // currentContent = typeof currentContent === 'string' ? JSON.parse(currentContent) : currentContent
  //   // this.setState({ title : title})
  //   // }
  // }
  // componentDidMount() {
  //   const {
  //     match: { params }
  //   } = this.props;
  //   if (params.hash) {
  //     // const { hash } = match.params
  //     this.props.loadLesson(params.hash, true);
  //   }
  // }
  // // lessonChange(e) {
  // //   let name = e.target.name;
  // //   let value = e.target.value;
  // //   this.setState({[name]: value })
  // // }
  // componentWillUnmount() {
  //   this.props.clearAddLessonValues();
  // }
  // handleTitleOnblur(e) {
  //   const title = e.target.value;
  //   if (title.length == 0) {
  //     this.setState({ blurEffect: true });
  //     return;
  //   }

  //   var lessoninfo = {
  //     lesson: {
  //       bgColor: "#000",
  //       slideBgColor: "#000",
  //       title: title,
  //       hash: this.props.hash || null
  //     }
  //   };
  //   if (!this.props.hash) {
  //     // adding new lesson if no hash available
  //     this.props.addLesson(lessoninfo);
  //     this.openSectionTypes();
  //   } else if (title != this.props.title) {
  //     // avoiding update if title has no change
  //     this.props.editLesson(lessoninfo);
  //   }
  //   this.setState({ blurEffect: false });
  // }
  // createSlideRequestButton(type = "") {
  //   let { hash, createSlideRequest } = this.props;
  //   createSlideRequest({
  //     lessonHash: hash,
  //     layout: type.toUpperCase(),
  //     displayOrder: this.getMaxDisplayOrder() + 1
  //   });
  // }
  // getMaxDisplayOrder() {
  //   let { slides = [] } = this.props;
  //   return slides.reduce(
  //     (acc, { displayOrder }) => (displayOrder > acc ? displayOrder : acc),
  //     0
  //   );
  // }

  // loadSlide(loadHash = null) {
  //   //if hash filters out slide from props or creates new slide
  //   let {
  //     hash,
  //     currentSlideHash,
  //     currentSlideSectionHash,
  //     slides,
  //     createSlideRequest,
  //     loadSlideSection
  //   } = this.props;
  //   let _currentSlide = {},
  //     _currentSection = {},
  //     _currentContent = {};
  //   if (loadHash === null) {
  //     this.openSectionTypes();
  //     return;
  //   }

  //   _currentSlide = slides.find(slide => slide.hash === loadHash);
  //   if (_currentSlide.sections && _currentSlide.sections.length > 0) {
  //     _currentSection = _currentSlide.sections[0]; //taking initial section as default
  //     if (_currentSlide.layout === "TEXT") {
  //       _currentContent =
  //         typeof _currentSection.content === "string"
  //           ? JSON.parse(_currentSection.content)
  //           : _currentSection.content;
  //     }
  //     if (_currentSlide.layout === "VIDEO") {
  //       _currentContent =
  //         typeof _currentSection.video === "string"
  //           ? JSON.parse(_currentSection.video)
  //           : _currentSection.video;
  //     }
  //   }
  //   loadSlideSection({ slideHash: _currentSlide.hash });
  //   this.setState({
  //     currentSlide: { ..._currentSlide },
  //     currentSection: { ..._currentSection },
  //     currentContent: _currentContent,
  //     currentSlideHash: _currentSlide.hash,
  //     currentSlideSectionHash: _currentSection.hash
  //   });
  // }

  // handleSlideInputBlur() {
  //   const { currentSlide, currentContent } = this.state;
  //   const {
  //     slides,
  //     currentSlideHash,
  //     currentSlideSectionHash,
  //     videoHash
  //   } = this.props;
  //   // console.warn(this.state, this.props)
  //   // return
  //   let _params = {};
  //   if (currentSlide.layout === "TEXT") {
  //     _params = {
  //       content: JSON.stringify(currentContent)
  //     };
  //   }
  //   if (currentSlide.layout === "VIDEO") {
  //     _params = {
  //       videoHash: videoHash
  //     };
  //   }
  //   if (!currentSlideSectionHash) {
  //     _params.type = currentSlide.layout;
  //     this.props.slideSectionCreateRequest(currentSlideHash, _params);
  //     return;
  //   } else {
  //     let section = getSectionFromSlides(slides, currentSlideHash);
  //     if (section.content === _params.content) return; // avoiding update if no changes to content
  //     this.props.slideSectionUpdateRequest(
  //       currentSlideHash,
  //       currentSlideSectionHash,
  //       _params
  //     );
  //     return;
  //   }
  //   // this.props.slideSectionUpdateRequest(currentSlideSectionHash, params)
  // }
  // handleVideoSlideInputBlur() {
  //   const {
  //     currentSlide,
  //     currentContent: { providerMediaId = "" }
  //   } = this.state;
  //   const { slides, currentSlideHash, currentSlideSectionHash } = this.props;
  //   // console.warn(this.state, this.props)
  //   // return
  //   if (providerMediaId.length > 1) {
  //     this.props.videoCreateRequest(providerMediaId);
  //     setTimeout(handleSlideInputBlur, 500);
  //   }
  //   console.log(currentContent.providerMediaId);
  // }
  // handleVideoSlideInputs(value, name) {
  //   //   const {currentSlideHash, currentSlideSectionHash} = this.state;
  //   //   const {} = this.props;
  //   //   if (!currentSlideSectionHash) {
  //   //     _params.type = currentSlide.layout;
  //   //     this.props.slideSectionCreateRequest(currentSlideHash, _params);
  //   //     return;
  //   //   } else {
  //   //     let section = getSectionFromSlides(slides, currentSlideHash);
  //   //     if (section.content === _params.content) return; // avoiding update if no changes to content
  //   //     this.props.slideSectionUpdateRequest(
  //   //       currentSlideHash,
  //   //       currentSlideSectionHash,
  //   //       _params
  //   //     );
  //   //   }
  //   //   // this.setState({ [name]: value });
  // }
  // handleSlideInputs(value, name) {
  //   // let name = e; //.target.name;
  //   // let value = e; //.target.value;
  //   // const {currentSection} = this.state
  //   // console.error({...currentSection,  content: { ...currentSection.content, [name]: value } })
  //   // console.log(this.state.currentSection)
  //   this.setState(({ currentContent }) => ({
  //     currentContent: { ...currentContent, [name]: value }
  //   }));
  // }
  // handleAddSlideButton() {
  //   this.loadSlide();
  // }
  // handleDeleteSlideButton(currentSlide) {
  //   const { deleteSlideRequest, slides, hash } = this.props;
  //   if (slides.length > 1) {
  //     let flag = window.confirm("Are you sure to delete this slide");
  //     if (flag) {
  //       deleteSlideRequest(currentSlide, { lessonHash: hash, slides });
  //     }
  //   } else {
  //     AlertError("Failed - Lesson should have atleast one slide ");
  //   }
  // }
  // decideLayout() {
  //   const {
  //     currentSlide: { layout },
  //     providerMediaId = "",
  //     currentSection,
  //     currentContent = {}
  //   } = this.state;
  //   const allLayouts = {
  //     TEXT: (
  //       <TextSection
  //         header={currentContent.header || ""}
  //         body={currentContent.body || ""}
  //         handleSlideInputBlur={this.handleSlideInputBlur}
  //         handleSlideInputs={this.handleSlideInputs}
  //       />
  //     ),
  //     VIDEO: (
  //       <VideoSection
  //         providerMediaId={currentContent.providerMediaId || ""}
  //         videoHash={currentContent.hash || ""}
  //         handleVideoSlideInputBlur={this.handleVideoSlideInputBlur}
  //         handleSlideInputs={this.handleSlideInputs}
  //       />
  //     ),
  //     default: <div style={{ height: "200px" }}>Choose a section type</div>
  //   };
  //   return {
  //     decidedLayout: layout,
  //     decidedLayoutComponent: allLayouts[layout] || allLayouts.default
  //   };
  // }
  // openSectionTypes() {
  //   this.setState({ openSectionTypes: true });

  //   // setTimeout(this.closeSectionTypes, 100)
  // }

  // closeSectionTypes() {
  //   this.setState({ openSectionTypes: false });
  // }

  render() {
    //   console.log(this.name || this.constructor.name, this.state, this.props);
    //   let {
    //     currentSlide,
    //     currentSlide: { layout },
    //     currentContent,
    //     openSectionTypes
    //   } = this.state;
    //   let {
    //     currentSlideHash,
    //     currentSlideSectionHash,
    //     slides = [],
    //     title
    //   } = this.props;
    //   let totalSlides = slides.length;
    //   let currentSlideOrder =
    //     slides.findIndex(slide => slide.hash === currentSlide.hash) + 1;
    //   let { decidedLayoutComponent, decidedLayout } = this.decideLayout();
    // let content = currentSection.length > 1
    //   ? typeof currentSection.content === 'string' ? JSON.parse(currentSection.content) : currentSection.content
    //   : {}
    // console.warn(content)  value={title} onChange={this.lessonChange}
    return (
      <Fragment>
        <div class="container">
          <br />
          <div class="row">
            <div className="col-lg-12">
              <h6 className="m-t-100 m-b-25">Course Title</h6>

              <form className="form-inline searchbar m-b-15" autoComplete="off">
                <div className="input-group mb-3 w-100">
                  <input
                    name="title"
                    required
                    type="text"
                    autoComplete="false"
                    className="form-control"
                    placeholder="What is this course called?"
                    aria-label="What is this course called?"
                    aria-describedby="basic-addon2"
                    // defaultValue={title}
                    // onBlur={this.handleTitleOnblur}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text bg-white border-top-0 border-right-0 border-left-0 p-r-0">
                      <i className="fas fa-arrow-circle-right" />
                    </span>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-lg-12">
              <h6 class="m-t-50 m-b-20">Course Admin</h6>
              <div class="course_tutor">
                <img
                  src={profileImg}
                  class="rounded-circle float-left"
                  alt=""
                />
                <h6 class="p-t-10 m-b-5">Rakul Kumar Pradhan</h6>
                <p class="f-s-10">CEO, COURSE ADMIN</p>
              </div>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 m-t-10 m-b-20">
              <button class="btn btn-link p-0">
                <i class="far fa-user-circle fa-lg f-s-30" />
                <span class="">Choose Another Admin</span>
              </button>
            </div>
            <div class="col-lg-12 m-b-100">
              <h6 class="m-t-50 m-b-20">Course Description</h6>
              <form action="">
                <div class="form-group">
                  <textarea
                    class="form-control border-bottom rounded-0 p-l-0 p-r-0"
                    name=""
                    id=""
                    cols="30"
                    rows="2"
                    placeholder="Describe something about this course"
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    Let the learners read a little brief about it in 500 or less
                    words.
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     title: state.addLessons.title,
//     hash: state.addLessons.hash,
//     currentSlideHash: state.addLessons.currentSlideHash,
//     currentSlideSectionHash: state.addLessons.currentSlideSectionHash,
//     slides: state.addLessons.slides,
//     videoHash: state.createVideo.hash
//   };
// };
export default CreateCourseContent;
//   export default connect(
//   mapStateToProps,
//   {
//     addLesson,
//     editLesson,
//     clearAddLessonValues,
//     createSlideRequest,
//     deleteSlideRequest,
//     slideSectionCreateRequest,
//     slideSectionUpdateRequest,
//     loadSlideSection,
//     loadLesson,
//     videoCreateRequest
//   }
// )(CreateLessonContent);

// const getSectionFromSlides = (slides = [], slideHash, sectionType = "TEXT") => {
//   let slide = slides.find(slide => slide.hash === slideHash);
//   return slide.sections[0] || {};
// };
