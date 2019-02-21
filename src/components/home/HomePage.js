import React, { Component, PropTypes } from 'react';
import MainHeader from '../common/header/MainHeader';
import NavScroll from '../common/header/NavScroll';
import MainFooter from '../common/footer/MainFooter';
import HomePageHeader from './HomePageHeader';
import HomePageLessonsGrid  from './HomePageLessonsGrid';


import '../../assets/css/mystyle.css';
import '../../assets/css/helper.css';
import '../../assets/css/offcanvas.css';
import '../../assets/js/offcanvas.js';
import '../../assets/js/jquery-slim.min.js';

const css = `.content {padding-left:10px}`;

const HomePage = () => {
    return (
      <div className='home'>    
            <MainHeader></MainHeader>
            <NavScroll></NavScroll>
            <HomePageHeader></HomePageHeader>
            <HomePageLessonsGrid></HomePageLessonsGrid>
            <MainFooter></MainFooter>
    </div>
    );
};
module.exports = HomePage;