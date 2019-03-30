import React, { PropTypes, Component } from 'react';
var courseImg = require('../../../../../src/assets/images/study.jpg');
import { connect } from 'react-redux';
import { addLesson, editLesson, loadLesson, clearAddLessonValues, createSlideRequest, deleteSlideRequest, slideSectionCreateRequest, slideSectionUpdateRequest, loadSlideSection, AlertError } from '../../../../actions/';
import shortid from 'shortid';
import EditorOptions from './editorOptions';
import SectionTypes from './SectionTypes';
import SlideThumbnails from './slideThumbnails';
import TextSection from './sectionForms.js/TextSection';
import 'react-quill/dist/quill.snow.css';
import ExpandRight from '../../../../assets/images/expandRight.png'
// import { EDIT_LESSON_URI } from '../../../helpers/constants';

class CreateLessonContent extends Component {
  constructor(props) {
    super(props)
    let initialState = { blurEffect: true, title: '', currentContent: {}, currentSlide: { layout: 'TEXT', displayOrder: 1, sections: [] }, currentSection: {} }
    const { hash, title } = this.props;
    this.loadSlide = this.loadSlide.bind(this)
    this.handleTitleOnblur = this.handleTitleOnblur.bind(this)
    this.handleSlideInputs = this.handleSlideInputs.bind(this)
    this.handleSlideInputBlur = this.handleSlideInputBlur.bind(this)
    this.handleAddSlideButton = this.handleAddSlideButton.bind(this)
    this.openSectionTypes = this.openSectionTypes.bind(this)
    this.closeSectionTypes = this.closeSectionTypes.bind(this)
    // this.lessonChange = this.lessonChange.bind(this)
    this.props.clearAddLessonValues()
    // console.error(this.props)
    this.state = initialState
  }

  componentDidUpdate(prevProps, prevState) {
    // `debugg`er
    const { hash, currentSlideHash, slides } = this.props;
    if (this.state.blurEffect && hash) {
      this.setState({ blurEffect: false })
    }
    if (currentSlideHash !== prevProps.currentSlideHash) {
      this.loadSlide(this.props.currentSlideHash)
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
    const { match: { params } } = this.props;
    if (params.hash) {
      // const { hash } = match.params
      this.props.loadLesson(params.hash, true)
    }
  }
  // lessonChange(e) {
  //   let name = e.target.name;
  //   let value = e.target.value;
  //   this.setState({[name]: value })
  // }
  componentWillUnmount() {
    this.props.clearAddLessonValues()
  }
  handleTitleOnblur(e) {
    const title = e.target.value
    if (title.length == 0) {
      this.setState({ blurEffect: true });
      return
    }

    var lessoninfo = { lesson: { bgColor: '#000', slideBgColor: '#000', title: title, hash: this.props.hash || null } };
    if (!this.props.hash) {               // adding new lesson if no hash available
      this.props.addLesson(lessoninfo);
      this.openSectionTypes();
    }
    else if (title != this.props.title) {   // avoiding update if title has no change
      this.props.editLesson(lessoninfo);
    }
    this.setState({ blurEffect: false });
  }

  loadSlide(loadHash = null) {    //if hash filters out slide from props or creates new slide 
    let { hash, currentSlideHash, currentSlideSectionHash, slides, createSlideRequest, loadSlideSection } = this.props;
    let _currentSlide = {}, _currentSection = {}, _currentContent = {};
    if (loadHash === null) {
      let maxDisplayOrder = slides.reduce((acc, { displayOrder }) => (displayOrder > acc ? displayOrder : acc), 0)
      createSlideRequest({
        "lessonHash": hash,
        "layout": "TEXT",
        "displayOrder": maxDisplayOrder + 1
      })
      this.openSectionTypes();
      return;
    }

    _currentSlide = slides.find(slide => slide.hash === loadHash)
    if (_currentSlide.sections && _currentSlide.sections.length > 0) {
      _currentSection = _currentSlide.sections[0]  //taking initial section as default
      _currentContent = typeof _currentSection.content === 'string' ? JSON.parse(_currentSection.content) : _currentSection.content
    }
    loadSlideSection({ slideHash: _currentSlide.hash })
    this.setState({
      currentSlide: { ..._currentSlide },
      currentSection: { ..._currentSection },
      currentContent: _currentContent,
      currentSlideHash: _currentSlide.hash,
      currentSlideSectionHash: _currentSection.hash
    })
  }

  handleSlideInputBlur() {
    const { currentSlide, currentContent } = this.state;
    const { slides, currentSlideHash, currentSlideSectionHash } = this.props;
    // console.warn(this.state, this.props)
    // return
    let _params = {
      content: JSON.stringify(currentContent),
    };
    if (!currentSlideSectionHash) {
      _params.type = currentSlide.layout
      this.props.slideSectionCreateRequest(currentSlideHash, _params)
      return;
    } else {
      let section = getSectionFromSlides(slides, currentSlideHash)
      if(section.content ===_params.content) return;        // avoiding update if no changes to content
      this.props.slideSectionUpdateRequest(currentSlideHash, currentSlideSectionHash, _params)
      return;
    }
    // this.props.slideSectionUpdateRequest(currentSlideSectionHash, params)
  }
  handleSlideInputs(value, name) {
    // let name = e; //.target.name;
    // let value = e; //.target.value;
    // const {currentSection} = this.state
    // console.error({...currentSection,  content: { ...currentSection.content, [name]: value } })
    // console.log(this.state.currentSection)
    this.setState(({ currentContent }) => ({ currentContent: { ...currentContent, [name]: value } }))
  }
  handleAddSlideButton() {
    this.loadSlide();
  }
  handleDeleteSlideButton(currentSlide) {
    const { deleteSlideRequest, slides, hash } = this.props;
    if (slides.length > 1) {
      let flag = window.confirm("Are you sure to delete this slide")
      if (flag) {
        deleteSlideRequest(currentSlide, { lessonHash: hash, slides })
      }
    } else {
      AlertError('Failed - Lesson should have atleast one slide ');
    }
  }

  openSectionTypes() {
    this.setState({ openSectionTypes: true })

    setTimeout(this.closeSectionTypes, 8000)
  }

  closeSectionTypes() {
    this.setState({ openSectionTypes: false })
  }

  render() {
    // console.log(this.name || this.constructor.name, this.state, this.props)
    let { currentSlide, currentContent, openSectionTypes } = this.state;
    let { currentSlideHash, currentSlideSectionHash, slides = [], title } = this.props;
    let totalSlides = slides.length;
    let currentSlideOrder = slides.findIndex(slide => slide.hash === currentSlide.hash) + 1
    // let content = currentSection.length > 1
    //   ? typeof currentSection.content === 'string' ? JSON.parse(currentSection.content) : currentSection.content
    //   : {}
    // console.warn(content)  value={title} onChange={this.lessonChange} 
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h6 className="m-t-75">Lesson Title</h6>
              <form className="form-inline searchbar" autoComplete="off" >
                <div className="input-group mb-3 w-100">
                  <input name="title" required type="text" autoComplete="false" className="form-control" placeholder="What is this lesson called?"
                    aria-label="What is this lesson called?" aria-describedby="basic-addon2" defaultValue={title} onBlur={this.handleTitleOnblur}></input>
                  <div className="input-group-append">
                    <span className="input-group-text bg-white border-top-0 border-right-0 border-left-0"><i className="fas fa-arrow-circle-right"></i></span>
                  </div>
                </div>
              </form>
              <div className="js">
                <div className="box">
                  <input type="file" name="file-3[]" id="file-3" className="inputfile inputfile-3" data-multiple-caption="{count} files selected"
                    multiple />
                  <label htmlFor="file-3 text-info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17">
                      <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" />
                    </svg>
                    <span>Choose a file&hellip;</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`lesson-slides-content container-fluid bg-light p-t-50 p-b-50 ${this.state.blurEffect ? "blur-effect" : ""}`}>
          <div className="row">
            <div className="col-lg-2" style={{height : '555px', overflowY:'scroll'}} >
              <SlideThumbnails slides={slides} currentSlide={currentSlide} onClickHandler={this.loadSlide} />
            </div>
            <div className="col-lg-8">
              <h6>Slide {currentSlideOrder} of {totalSlides}</h6>
              <div className="p-5 bg-white box-shadow mb-5 relative">
                <form className="lesson-form">
                  <TextSection header={currentContent.header || ''} body={currentContent.body || ''} handleSlideInputBlur={this.handleSlideInputBlur} handleSlideInputs={this.handleSlideInputs} />
                </form>
                <div className="addslide bg-white box-shadow f-s-12 text-center" style={{width: openSectionTypes? "40%" : '31px'  }}>
                  {openSectionTypes ? <SectionTypes onClick={this.closeSectionTypes} /> : <img onClick={this.openSectionTypes} src={ExpandRight} />}
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button type="button" onClick={() => this.handleDeleteSlideButton(currentSlide)} className="btn btn-dark f-s-12 rounded-pill pr-4 pl-4 pt-2 pb-2">
                    <i className="far fa-trash-alt m-r-5"></i> DELETE THIS SLIDE</button>
                </div>
                <div className="col text-right">
                  <button type="button" onClick={this.handleAddSlideButton} className="btn btn-primary f-s-12 rounded-pill pr-4 pl-4 pt-2 pb-2">
                    <i className="fas fa-plus m-r-5"></i> ADD NEXT SLIDE</button>
                </div>
              </div>
            </div>
            <EditorOptions />
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    title: state.addLessons.title,
    hash: state.addLessons.hash,
    currentSlideHash: state.addLessons.currentSlideHash,
    currentSlideSectionHash: state.addLessons.currentSlideSectionHash,
    slides: state.addLessons.slides
  }
}
export default connect(mapStateToProps, {
  addLesson,
  editLesson,
  clearAddLessonValues,
  createSlideRequest,
  deleteSlideRequest,
  slideSectionCreateRequest,
  slideSectionUpdateRequest,
  loadSlideSection,
  loadLesson,
})(CreateLessonContent);

const getSectionFromSlides = (slides = [], slideHash, sectionType = 'TEXT') => {
  let slide = slides.find(slide => slide.hash === slideHash)
  return slide.sections[0] || {}
}
