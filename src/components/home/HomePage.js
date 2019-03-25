import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainHeader from '../common/header/MainHeader';
import NavScroll from '../common/header/NavScroll';
import HomePageHeader from './HomePageHeader';
import HomePageLessonsGrid from './HomePageLessonsGrid';
// import * as lessonsActions from '../../actions/LessonsActions';
import { loadLessons } from '../../actions';

import '../../assets/css/mystyle.css';
import '../../assets/css/helper.css';
import '../../assets/css/offcanvas.css';
import '../../assets/js/offcanvas.js';
import '../../assets/js/jquery-slim.min.js';

const css = `.content {padding-left:10px}`;

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageOptions: {
        pageNumber: 1
      }
    }
    this.loadmore = this.loadmore.bind(this)
  }
  componentDidMount() {
    this.props.loadLessons(this.state.pageOptions)
  }

  loadmore() {
    window.scrollBy({ top: -200, behavior: 'smooth' });
    this.setState(({ pageOptions }) => ({ pageOptions: { ...pageOptions, pageNumber: pageOptions.pageNumber + 1 } })
      // , () => console.log(this.state))
      , () => this.props.loadLessons(this.state.pageOptions, true))
  }

  // loadlessons(){
  //   this.props.loadLessons(this.state.pageOptions)
  // }

  render() {
    const { lessons } = this.props;
    return (
      <div className='home'>
        <MainHeader></MainHeader>
        <NavScroll></NavScroll>
        <HomePageHeader lessons={lessons}></HomePageHeader>
        <HomePageLessonsGrid loadMoreHandler={this.loadmore} lessons={lessons}></HomePageLessonsGrid>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    lessons: state.lessons
  };
}

export default connect(mapStateToProps, { loadLessons })(HomePage);