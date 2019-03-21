import React, { PropTypes, Component } from 'react';
var courseImg = require('../../../../src/assets/images/study.jpg');
import { connect } from 'react-redux';
import { addLesson, editLesson, clearAddLessonValues, createSlideRequest, deleteSlideRequest, slideSectionCreateRequest, slideSectionUpdateRequest, AlertError } from '../../../actions/';
import shortid from 'shortid';

class CreateLessonContent extends Component {
  constructor(props) {
    super(props)
    this.state = { blurEffect: true, currentContent: {}, currentSlide: { layout: 'TEXT', displayOrder: 1, sections: [] }, currentSection: {} }
    this.loadSlide = this.loadSlide.bind(this)
    this.handleTitleOnblur = this.handleTitleOnblur.bind(this)
    this.handleSlideInputs = this.handleSlideInputs.bind(this)
    this.handleSlideInputBlur = this.handleSlideInputBlur.bind(this)
    this.handleAddSlideButton = this.handleAddSlideButton.bind(this)
    this.props.clearAddLessonValues()
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.currentSlideHash !== prevProps.currentSlideHash) {
      this.loadSlide(this.props.currentSlideHash)
    }
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
    }
    else if (title != this.props.title) {   // avoiding update if title has no change
      this.props.editLesson(lessoninfo);
    }
    this.setState({ blurEffect: false });
  }

  loadSlide(loadHash = null) {    //if hash filters out slide from props or creates new slide 
    let { hash, currentSlideHash, currentSlideSectionHash, slides, createSlideRequest } = this.props;
    let _currentSlide = {}, _currentSection = {}, _currentContent = {};
    if (loadHash === null) {
      let maxDisplayOrder = slides.reduce((acc, { displayOrder }) => (displayOrder > acc ? displayOrder : acc), 0)
      createSlideRequest({
        "lessonHash": hash,
        "layout": "TEXT",
        "displayOrder": maxDisplayOrder + 1
      })
      return;
    }

    _currentSlide = slides.find(slide => slide.hash === loadHash)
    if (_currentSlide.sections.length > 0) {
      _currentSection = _currentSlide.sections[0]  //taking initial section as default
      _currentContent = typeof _currentSection.content === 'string' ? JSON.parse(_currentSection.content) : _currentSection.content
    }
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
    console.warn(this.state, this.props)
    // return
    let _params = {
      content: JSON.stringify(currentContent),
    };
    if (!currentSlideSectionHash) {
      _params.type = currentSlide.layout
      this.props.slideSectionCreateRequest(currentSlideHash, _params)
      return;
    } else {
      this.props.slideSectionUpdateRequest(currentSlideHash, currentSlideSectionHash, _params)
      return;
    }
    // this.props.slideSectionUpdateRequest(currentSlideSectionHash, params)
  }
  handleSlideInputs(e) {
    let name = e.target.name;
    let value = e.target.value;
    // const {currentSection} = this.state
    // console.error({...currentSection,  content: { ...currentSection.content, [name]: value } })
    // console.log(this.state.currentSection)
    this.setState(({ currentContent }) => ({ currentContent: { ...currentContent, [name]: value } }))
  }
  handleAddSlideButton() {
    this.loadSlide();
  }
  handleDeleteSlideButton(slideHash) {
    const { deleteSlideRequest, slides } = this.props;
    if (slides.length > 1) {
      let flag = window.confirm("Are you sure to delete this slide")
      if (flag) {
        deleteSlideRequest(slideHash)
      }
    } else {
      AlertError('Failed - Lesson should have atleast one slide ');
    }
  }



  render() {
    console.log(this.name || this.constructor.name, this.state, this.props)
    let { currentSlide, currentContent } = this.state;
    let { currentSlideHash, currentSlideSectionHash, slides } = this.props;
    let totalSlides = slides.length;
    // let content = currentSection.length > 1
    //   ? typeof currentSection.content === 'string' ? JSON.parse(currentSection.content) : currentSection.content
    //   : {}
    // console.warn(content)
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h6 className="m-t-75">Lesson Title</h6>
              <form className="form-inline searchbar">
                <div className="input-group mb-3 w-100">
                  <input type="text" className="form-control" placeholder="What is this lesson called?"
                    aria-label="What is this lesson called?" aria-describedby="basic-addon2" onBlur={this.handleTitleOnblur}></input>
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
            <div className="col-lg-2">
              <ul className="sliderss mt-4">
                {slides.map(slide => <li key={shortid.generate()} onClick={() => this.loadSlide(slide.hash)} >
                  <img key={shortid.generate()} src={`https://dummyimage.com/600x400/ddd/${slide.hash === currentSlide.hash ? '07b' : '000'}&text=` + (slide.displayOrder || '')} className="w-100" alt={slide.header}></img>
                </li>)}
              </ul>
            </div>
            <div className="col-lg-8">
              <h6>Slide {currentSlide.displayOrder} of {totalSlides}</h6>
              <div className="p-5 bg-white box-shadow mb-5 relative">
                <form className="lesson-form">
                  <div className="form-group">
                    <input name="header" type="text" value={currentContent.header || ''} onBlur={this.handleSlideInputBlur} onChange={this.handleSlideInputs} className="form-control pl-4 pr-4 pt-5 pb-5" placeholder="Add a header"></input>
                  </div>
                  <div className="form-group mb-0">
                    <textarea name="body" value={currentContent.body || ''} onBlur={this.handleSlideInputBlur} onChange={this.handleSlideInputs} className="form-control pl-4 pr-4 pt-4 pb-5" rows="10" placeholder="Enter body text"></textarea>
                  </div>
                </form>
                <div className="addslide p-3 bg-white box-shadow f-s-12 text-center">
                  <div className="row m-0">
                    <div className="col-4 bg-light border">
                      <p><i className="fas fa-font"></i></p>
                      <p>Text</p>
                    </div>
                    <div className="col-4 bg-light border">
                      <p><i className="fas fa-font"></i> +
                  <i className="fas fa-image"></i></p>
                      <p>Text + Image</p>
                    </div>
                    <div className="col-4 bg-light border">
                      <p><i className="fas fa-image"></i></p>
                      <p>Image</p>
                    </div>
                    <div className="col-4 bg-light border">
                      <p>
                        <i className="fas fa-video"></i>
                      </p>
                      <p>Video</p>
                    </div>
                    <div className="col-4 bg-light border">
                      <p>
                        <i className="fas fa-question-circle"></i>
                      </p>
                      <p>Question</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button type="button" onClick={() => this.handleDeleteSlideButton(currentSlideHash)} className="btn btn-dark f-s-12 rounded-pill pr-4 pl-4 pt-2 pb-2">
                    <i className="far fa-trash-alt m-r-5"></i> DELETE THIS SLIDE</button>
                </div>
                <div className="col text-right">
                  <button type="button" onClick={this.handleAddSlideButton} className="btn btn-primary f-s-12 rounded-pill pr-4 pl-4 pt-2 pb-2">
                    <i className="fas fa-plus m-r-5"></i> ADD NEXT SLIDE</button>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <h6>Options</h6>
              <div className="p-5 bg-white box-shadow">
                <div className="row">
                  <div className="col text-center p-1 border">
                    <i className="fas fa-bold"></i>
                  </div>
                  <div className="col text-center p-1 border">
                    <i className="fas fa-underline"></i>
                  </div>
                  <div className="col text-center p-1 border">
                    <i className="fas fa-italic"></i>
                  </div>
                </div>
                <div className="row">
                  <div className="col text-center p-1 border">
                    <i className="fas fa-align-left"></i>
                  </div>
                  <div className="col text-center p-1 border">
                    <i className="fas fa-align-center"></i>
                  </div>
                  <div className="col text-center p-1 border">
                    <i className="fas fa-align-right"></i>
                  </div>
                </div>
                <div className="row">
                  <div className="col text-center p-1 border">
                    <i className="fas fa-list-ol"></i>
                  </div>
                  <div className="col text-center p-1 border">
                    <i className="fas fa-list-ul"></i>
                  </div>
                  <div className="col text-center p-1 border">
                    <i className="fas fa-link"></i>
                  </div>
                </div>
                <div className="row m-b-10">
                  <div className="col text-center p-1 border">
                    <i className="fas fa-font fa-xs"></i>
                  </div>
                  <div className="col text-center p-1 border">
                    <i className="fas fa-font fa-sm"></i>
                  </div>
                  <div className="col text-center p-1 border">
                    <i className="fas fa-font fa-md"></i>
                  </div>
                </div>
                <div className="row">
                  <div className="col text-center p-3 border bg-primary"></div>
                  <div className="col text-center p-3 border bg-secondary"></div>
                  <div className="col text-center p-3 border bg-success"></div>
                </div>
                <div className="row">
                  <div className="col text-center p-3 border bg-danger"></div>
                  <div className="col text-center p-3 border bg-warning"></div>
                  <div className="col text-center p-3 border bg-info"></div>
                </div>
              </div>
            </div>
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
  slideSectionUpdateRequest
})(CreateLessonContent);


