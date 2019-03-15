import React, { PropTypes } from 'react';
import DashboardContent from './DashboardContent';
import MainFooter from '../common/footer/MainFooter';
import MainHeader from '../common/header/MainHeader';


const PublishLessonPage = () => {
    return (
     <div>
       <MainHeader></MainHeader>
       <DashboardContent/>
       <MainFooter></MainFooter>
    </div>
    );
};
module.exports = PublishLessonPage;


