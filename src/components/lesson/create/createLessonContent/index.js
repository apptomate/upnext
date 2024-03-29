import React, { PropTypes, Component, Fragment } from "react";
var courseImg = require("../../../../../src/assets/images/study.jpg");
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
import "react-quill/dist/quill.snow.css";
import ExpandRight from "../../../../assets/images/expandRight.png";
import { fadeIn } from "react-animations";
// import { EDIT_LESSON_URI } from '../../../helpers/constants';

class CreateLessonContent extends Component {
  constructor(props) {
    super(props);
    let initialState = {
      blurEffect: true,
      title: "",
      currentContent: {},
      videoHash: "",
      providerMediaId: "",
      currentSlide: { layout: "", displayOrder: 1, sections: [] },
      currentSection: {},
      openSectionTypes: false
    };
    const { hash, title } = this.props;
    this.loadSlide = this.loadSlide.bind(this);
    this.handleTitleOnblur = this.handleTitleOnblur.bind(this);
    this.handleSlideInputs = this.handleSlideInputs.bind(this);
    this.handleSlideInputBlur = this.handleSlideInputBlur.bind(this);
    this.handleAddSlideButton = this.handleAddSlideButton.bind(this);
    this.openSectionTypes = this.openSectionTypes.bind(this);
    this.closeSectionTypes = this.closeSectionTypes.bind(this);
    this.createSlideRequestButton = this.createSlideRequestButton.bind(this);
    this.handleVideoSlideInputBlur = this.handleVideoSlideInputBlur.bind(this);
    this.handleVideoSlideInputs = this.handleVideoSlideInputs.bind(this);
    // this.createSlideRequestButton = this.createSlideRequestButton.bind(this)
    this.props.clearAddLessonValues();
    // console.error(this.props)
    this.state = initialState;
    scroll(top);
  }

  componentDidUpdate(prevProps, prevState) {
    // `debugg`er
    const { hash, currentSlideHash, slides } = this.props;
    if (this.state.blurEffect && hash) {
      this.setState({ blurEffect: false });
    }
    if (
      this.props.currentSlideHash &&
      currentSlideHash !== prevProps.currentSlideHash
    ) {
      this.loadSlide(this.props.currentSlideHash);
    }
    // if (title !== prevState.title) {
    //   let initSlide = slides[0];
    //   let currentSection = initSlide.sections[0] || {}
    //   let currentContent = (currentSection.content  || {})
    // currentContent = typeof currentContent === 'string' ? JSON.parse(currentContent) : currentContent
    // this.setState({ title : title})
    // }
  }
  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    if (params.hash) {
      // const { hash } = match.params
      this.props.loadLesson(params.hash, true);
    }
  }
  // lessonChange(e) {
  //   let name = e.target.name;
  //   let value = e.target.value;
  //   this.setState({[name]: value })
  // }
  // componentWillUnmount() {
  //   console.log("this.props.clearAddLessonValues();");
  //   this.props.clearAddLessonValues();
  // }
  handleTitleOnblur(e) {
    const title = e.target.value;
    if (title.length == 0) {
      this.setState({ blurEffect: true });
      return;
    }

    var lessoninfo = {
      lesson: {
        bgColor: "#000",
        slideBgColor: "#000",
        title: title,
        hash: this.props.hash || null
      }
    };
    if (!this.props.hash) {
      // adding new lesson if no hash available
      this.props.addLesson(lessoninfo);
      this.openSectionTypes();
    } else if (title != this.props.title) {
      // avoiding update if title has no change
      this.props.editLesson(lessoninfo);
    }
    this.setState({ blurEffect: false });
  }
  createSlideRequestButton(type = "") {
    let { hash, createSlideRequest } = this.props;
    createSlideRequest({
      lessonHash: hash,
      layout: type.toUpperCase(),
      displayOrder: this.getMaxDisplayOrder() + 1
    });
  }
  getMaxDisplayOrder() {
    let { slides = [] } = this.props;
    return slides.reduce(
      (acc, { displayOrder }) => (displayOrder > acc ? displayOrder : acc),
      0
    );
  }

  loadSlide(loadHash = null) {
    //if hash filters out slide from props or creates new slide
    let {
      hash,
      currentSlideHash,
      currentSlideSectionHash,
      slides,
      createSlideRequest,
      loadSlideSection
    } = this.props;
    let _currentSlide = {},
      _currentSection = {},
      _currentContent = {};
    if (loadHash === null) {
      this.openSectionTypes();
      return;
    }

    _currentSlide = slides.find(slide => slide.hash === loadHash);
    if (_currentSlide.sections && _currentSlide.sections.length > 0) {
      _currentSection = _currentSlide.sections[0]; //taking initial section as default
      if (_currentSlide.layout === "TEXT") {
        _currentContent =
          typeof _currentSection.content === "string"
            ? JSON.parse(_currentSection.content)
            : _currentSection.content;
      }
      if (_currentSlide.layout === "VIDEO") {
        _currentContent =
          typeof _currentSection.video === "string"
            ? JSON.parse(_currentSection.video)
            : _currentSection.video;
      }
    }
    loadSlideSection({ slideHash: _currentSlide.hash });
    this.setState({
      currentSlide: { ..._currentSlide },
      currentSection: { ..._currentSection },
      currentContent: _currentContent,
      currentSlideHash: _currentSlide.hash,
      currentSlideSectionHash: _currentSection.hash
    });
  }

  handleSlideInputBlur() {
    const { currentSlide, currentContent } = this.state;
    const {
      slides,
      currentSlideHash,
      currentSlideSectionHash,
      videoHash
    } = this.props;
    // console.warn(this.state, this.props)
    // return
    let _params = {};
    if (currentSlide.layout === "TEXT") {
      _params = {
        content: JSON.stringify(currentContent)
      };
    }
    if (currentSlide.layout === "VIDEO") {
      _params = {
        videoHash: videoHash
      };
    }
    console.error("handleSlideInputBlur", _params);
    if (!currentSlideSectionHash) {
      _params.type = currentSlide.layout;
      this.props.slideSectionCreateRequest(currentSlideHash, _params);
      console.log(
        "this.props.slideSectionCreateRequest(currentSlideHash, _params);"
      );
      return;
    } else {
      let section = getSectionFromSlides(slides, currentSlideHash);
      console.error(section.content, _params.content);
      // if (section.content === _params.content) return; // avoiding update if no changes to content
      this.props.slideSectionUpdateRequest(
        currentSlideHash,
        currentSlideSectionHash,
        _params
      );
      return;
    }
    // this.props.slideSectionUpdateRequest(currentSlideSectionHash, params)
  }
  handleVideoSlideInputBlur() {
    const {
      currentSlide,
      currentContent: { providerMediaId = "" }
    } = this.state;
    const { slides, currentSlideHash, currentSlideSectionHash } = this.props;
    // console.warn(this.state, this.props)
    // return
    if (providerMediaId.length > 1) {
      this.props.videoCreateRequest(providerMediaId);
      setTimeout(this.handleSlideInputBlur, 500);
    }
    // console.log(currentContent.providerMediaId);
  }
  handleVideoSlideInputs(value, name) {
    //   const {currentSlideHash, currentSlideSectionHash} = this.state;
    //   const {} = this.props;
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
    //   }
    //   // this.setState({ [name]: value });
  }
  handleSlideInputs(value, name) {
    // let name = e; //.target.name;
    // let value = e; //.target.value;
    // const {currentSection} = this.state
    // console.error({...currentSection,  content: { ...currentSection.content, [name]: value } })
    // console.log(this.state.currentSection)
    this.setState(({ currentContent }) => ({
      currentContent: { ...currentContent, [name]: value }
    }));
  }
  handleAddSlideButton() {
    this.loadSlide();
  }
  handleDeleteSlideButton(currentSlide) {
    const { deleteSlideRequest, slides, hash } = this.props;
    if (slides.length > 1) {
      let flag = window.confirm("Are you sure to delete this slide");
      if (flag) {
        deleteSlideRequest(currentSlide, { lessonHash: hash, slides });
      }
    } else {
      AlertError("Failed - Lesson should have atleast one slide ");
    }
  }
  decideLayout() {
    const {
      currentSlide: { layout },
      providerMediaId = "",
      currentSection,
      currentContent = {}
    } = this.state;
    const allLayouts = {
      TEXT: (
        <TextSection
          header={currentContent.header || ""}
          body={currentContent.body || ""}
          handleSlideInputBlur={this.handleSlideInputBlur}
          handleSlideInputs={this.handleSlideInputs}
        />
      ),
      VIDEO: (
        <VideoSection
          providerMediaId={currentContent.providerMediaId || ""}
          videoHash={currentContent.hash || ""}
          handleVideoSlideInputBlur={this.handleVideoSlideInputBlur}
          handleSlideInputs={this.handleSlideInputs}
        />
      ),
      default: <div style={{ height: "200px" }}>Choose a section type</div>
    };
    return {
      decidedLayout: layout,
      decidedLayoutComponent: allLayouts[layout] || allLayouts.default
    };
  }
  openSectionTypes() {
    this.setState({ openSectionTypes: true });

    // setTimeout(this.closeSectionTypes, 100)
  }

  closeSectionTypes() {
    this.setState({ openSectionTypes: false });
  }

  render() {
    console.log(this.name || this.constructor.name, this.state, this.props);
    let {
      currentSlide,
      currentSlide: { layout },
      currentContent,
      openSectionTypes
    } = this.state;
    let {
      currentSlideHash,
      currentSlideSectionHash,
      slides = [],
      title
    } = this.props;
    let totalSlides = slides.length;
    let currentSlideOrder =
      slides.findIndex(slide => slide.hash === currentSlide.hash) + 1;
    let { decidedLayoutComponent, decidedLayout } = this.decideLayout();
    // let content = currentSection.length > 1
    //   ? typeof currentSection.content === 'string' ? JSON.parse(currentSection.content) : currentSection.content
    //   : {}
    // console.warn(content)  value={title} onChange={this.lessonChange}
    return (
      <Fragment>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h6 className="m-t-100 m-b-25">Lesson Title</h6>
                <form
                  className="form-inline searchbar m-b-15"
                  autoComplete="off"
                >
                  <div className="input-group mb-3 w-100">
                    <input
                      name="title"
                      required
                      type="text"
                      autoComplete="false"
                      className="form-control"
                      placeholder="What is this lesson called?"
                      aria-label="What is this lesson called?"
                      aria-describedby="basic-addon2"
                      defaultValue={title}
                      onBlur={this.handleTitleOnblur}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text bg-white border-top-0 border-right-0 border-left-0 p-r-0">
                                      <i className="fas fa-arrow-right text-primary"></i>
                      </span>
                    </div>
                  </div>
                </form>
                <div className="js">
                  <div className="box">
                    <input
                      type="file"
                      name="file-3[]"
                      id="file-3"
                      className="inputfile inputfile-3"
                      data-multiple-caption="{count} files selected"
                      multiple
                    />
                    <label htmlFor="file-3 text-info">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="17"
                        viewBox="0 0 20 17"
                      >
                        <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" />
                      </svg>
                      <span>Upload lesson image</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`lesson-slides-content container-fluid bg-light p-t-50 p-b-50 ${
              this.state.blurEffect ? "blur-effect disableDiv" : ""
            }`}
          >
            <div className="row">
              <div
                className="col-lg-2"
                style={{ height: "555px", overflowY: "scroll" }}
              >
                <SlideThumbnails
                  slides={slides}
                  currentSlide={currentSlide}
                  onClickHandler={this.loadSlide}
                />
              </div>
              <div className="col-lg-8">
                <h6>
                  Slide {currentSlideOrder} of {totalSlides}
                </h6>
                <div className="p-5 bg-white box-shadow mb-5 relative">
                  {decidedLayoutComponent}

                  <div
                    className="addslide bg-white box-shadow f-s-12 text-center"
                    style={{ width: openSectionTypes ? "40%" : "31px" }}
                  >
                    {openSectionTypes ? (
                      <SectionTypes
                        createSlideRequestButton={this.createSlideRequestButton}
                        onClick={this.closeSectionTypes}
                      />
                    ) : (
                      <i
                        className="fas fa-expand-arrows-alt"
                        onClick={this.openSectionTypes}
                        src={ExpandRight}
                      />
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <button
                      type="button"
                      onClick={() => this.handleDeleteSlideButton(currentSlide)}
                      className="btn btn-dark f-s-12 rounded-pill pr-4 pl-4 pt-2 pb-2"
                    >
                      <i className="far fa-trash-alt m-r-5" /> DELETE THIS SLIDE
                    </button>
                  </div>
                  <div className="col text-right">
                    <button
                      type="button"
                      onClick={this.handleAddSlideButton}
                      className="btn btn-primary f-s-12 rounded-pill pr-4 pl-4 pt-2 pb-2"
                    >
                      <i className="fas fa-plus m-r-5" /> ADD NEXT SLIDE
                    </button>
                  </div>
                </div>
              </div>
              {decidedLayout == "TEXT" && <EditorOptions />}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.addLessons.title,
    hash: state.addLessons.hash,
    currentSlideHash: state.addLessons.currentSlideHash,
    currentSlideSectionHash: state.addLessons.currentSlideSectionHash,
    slides: state.addLessons.slides,
    videoHash: state.createVideo.hash
  };
};
export default connect(
  mapStateToProps,
  {
    addLesson,
    editLesson,
    clearAddLessonValues,
    createSlideRequest,
    deleteSlideRequest,
    slideSectionCreateRequest,
    slideSectionUpdateRequest,
    loadSlideSection,
    loadLesson,
    videoCreateRequest
  }
)(CreateLessonContent);

const getSectionFromSlides = (slides = [], slideHash, sectionType = "TEXT") => {
  let slide = slides.find(slide => slide.hash === slideHash);
  return slide.sections[0] || {};
};
