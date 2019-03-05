import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainHeader from '../common/header/MainHeader';
import NavScroll from '../common/header/NavScroll';
import MainFooter from '../common/footer/MainFooter';
import HomePageHeader from './HomePageHeader';
import HomePageLessonsGrid  from './HomePageLessonsGrid';
import * as lessonsActions from '../../actions/LessonsActions';

import '../../assets/css/mystyle.css';
import '../../assets/css/helper.css';
import '../../assets/css/offcanvas.css';
import '../../assets/js/offcanvas.js';
import '../../assets/js/jquery-slim.min.js';

const css = `.content {padding-left:10px}`;

class HomePage extends React.Component {
  constructor(props, context) {
      super(props, context);
  }
  render() {
    return (
      <div className='home'>    
            <MainHeader></MainHeader>
            <NavScroll></NavScroll>
            <HomePageHeader lessons={this.props.lessons}></HomePageHeader>
            <HomePageLessonsGrid lessons={this.props.lessons}></HomePageLessonsGrid>
            <MainFooter></MainFooter>
      </div>       
       );
      }
  }
function mapStateToProps(state, ownProps) {
  return {    
    lessons: state.lessons
  };
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(lessonsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);