import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import profile from '../../assets/images/profile.jpg';
import Chart from 'react-google-charts';

class PublishLessonContent extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: false,
            autoplaySpeed: 2000,
            mobileFirst: true
          };
    return (
        <main role="main">
        <div>
            <div className="container-fluid bg-light welcome-section">
      <div className="row">
        <div className="container">
           <div className="row">
            <div className="col-md-6">
              <h2>Welcome home, Rahul!</h2>
            </div>
            <div className="col-md-6">
              <h5>INTERESTING FACTS FROM REPORTS</h5>
              <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <h1 className="count">503 
                    <span>
                       Active <br /> Learners
                       </span>
                  </h1>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <h1 className="count">85%
                    <span>
                      Completion
                      <br /> Rating
                    </span>
                  </h1>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <h1 className="count">42
                    <span>
                      Assignments
                      <br /> Assigned
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div> 
          {/* <!-- slider --> */}
          
          <div className="row sslider">
            <div className="col-md-12">
              <h5>Your Task List for today</h5>
              <div className="slider demo">
              <Slider {...settings}>
                <div> 
                  <div className="course-info">
                    <p>Please complete designing lessons for the new joinees coming in this quarter.</p>
                    <p className="text-danger">
                      <small>Task due by 31 Dec 2018</small>
                    </p>
                  </div>                  
                  <div className="course_det bl-5">
                    <h4>COURSE</h4>
                    <p>Employee Onboarding and Training</p>
                  </div>
                </div>
                <div>
                  <div className="course-info">
                    <p>Please complete designing lessons for the new joinees coming in this quarter.</p>
                    <p className="text-danger">
                      <small>Task due by 2 Jan 2019</small>
                    </p>
                  </div>
                  <div className="course_det bl-5">
                    <h4>COURSE</h4>
                    <p>Managing High Potentials</p>
                  </div>
                </div>
                <div>
                  <div className="course-info">
                    <p>Your manager wants you to help your peers in this lesson.</p>
                    <p className="text-danger">
                      <small>Task due by 31 Dec 2018</small>
                    </p>
                  </div>
                  <div className="course_det bl-5">
                    <h4>LESSON</h4>
                    <p>Transforming from Manager to Leader</p>
                  </div>
                </div>
                <div>
                  <div className="course-info">
                    <p>Finish all the courses in this campaign to excel in your grade.</p>
                    <p className="text-danger">
                      <small>Task due by 31 Dec 2018</small>
                    </p>
                  </div>
                  <div className="course_det bl-5">
                    <h4>CAREER PATH</h4>
                    <p>Product Management first steps</p>
                  </div>
                </div>
                <div>
                  <div className="course-info">
                    <p>Your manager wants you to help your peers in this lesson.</p>
                    <p className="text-danger">
                      <small>Task due by 31 Dec 2018</small>
                    </p>
                  </div>
                  <div className="course_det bl-5">
                    <h4>LESSON</h4>
                    <p>Transforming from Manager to Leader</p>
                  </div>
                </div>
                <div>
                  <div className="course-info">
                    <p>Finish all the courses in this campaign to excel in your grade.</p>
                    <p className="text-danger">
                      <small>Task due by 31 Dec 2018</small>
                    </p>
                  </div>
                  <div className="course_det bl-5">
                    <h4>CAREER PATH</h4>
                    <p>Product Management first steps</p>
                  </div>
                </div>
                </Slider>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
    
    
    <div className="container-fluid report-highlights">
      <div className="row">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
               <h5 className="text-center">Reporting Highlights</h5>
            </div>
            <div className="col-md-12">
              <h6>Most Frequently Completed Courses</h6>
              <ul className="course-comp">
                <li className="row">
                  <div className="col-md-9">
                    <p className="crse-comp-title">COURSE</p>
                    <h3>Transforming from Manager to Leader</h3>
                    <p className="crse-enroll">97 Enrolled</p>
                  </div>
                  <div className="col-md-3">
                    <h1 className="count text-danger">503
                      <span className="text-dark">
                         Completions this week
                      </span>
                    </h1>
                    <p className="crse-enroll">+31 since last week</p>
                  </div>
                </li>
                <li className="row">
                  <div className="col-md-9">
                    <p className="crse-comp-title">COURSE</p>
                    <h3>Managing High Potentials</h3>
                    <p className="crse-enroll">97 Enrolled</p>
                  </div>
                  <div className="col-md-3">
                    <h1 className="count text-success">503
                      <span className="text-dark">
                        Completions this week
                      </span>
                    </h1>
                    <p className="crse-enroll">+31 since last week</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-12">
              <h6>Recent Enrollments</h6>
              <div>
              <Chart
    // width={300}
    // height={300}
    chartType="ColumnChart"
  spreadSheetUrl="https://docs.google.com/spreadsheets/d/1jN0iw0usssnsG1_oi-NXtuKfsUsGme09GsFidbqxFYA"
  toolbarItems={[
    {
      type: 'csv',
      datasource:
        'https://spreadsheets.google.com/tq?key=1jN0iw0usssnsG1_oi-NXtuKfsUsGme09GsFidbqxFYA',
    },
  ]}
  rootProps={{ 'data-testid': '1' }}
  />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12 text-center text-primary f-s-12 f-w-600">
               SEE FULL REPORTS <i className="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="container-fluid bg-light talk-section">
      <div className="row">
        <div className="container">
          {/* <!-- slider --> */}
          <div className="row sslider">
            <div className="col-md-12">
              <h5 className="text-center">What’s being talked about?</h5>
              <div className="slider demo">
              <Slider {...settings}>
                <div>
                  <div className="course-info">
                    <h5>
                      <img src={profile} className="w-10" alt=""/>
                       Stuck in Lesson 3, need help!
                    </h5>
                    <p>Friendship to connection an am considered difficult. Country met pursuit lasting moments why calling certain the. Middletons our way understood law. Among state cease how and sight since shall.</p>
                  </div>
                  <div className="course_det bl-5">
                    <h4>COURSE</h4>
                    <p>Employee Onboarding and Training</p>
                  </div>
                </div>
                <div>
                  <div className="course-info">
                    <h5>
                      <img src={profile} className="w-10" alt=""/> Stuck in Lesson 3, need help!
                    </h5>
                    <p>Friendship to connection an am considered difficult. Country met pursuit lasting moments why calling certain the. Middletons
                      our way understood law. Among state cease how and sight since shall.</p>
                  </div>
                  <div className="course_det bl-5">
                    <h4>COURSE</h4>
                    <p>Employee Onboarding and Training</p>
                  </div>
                </div>
                <div>
                  <div className="course-info">
                    <h5>
                      <img src={profile} className="w-10" alt=""/> Stuck in Lesson 3, need help!
                    </h5>
                    <p>Friendship to connection an am considered difficult. Country met pursuit lasting moments why calling certain the. Middletons
                      our way understood law. Among state cease how and sight since shall.</p>
                  </div>
                  <div className="course_det bl-5">
                    <h4>COURSE</h4>
                    <p>Employee Onboarding and Training</p>
                  </div>
                </div>
                <div>
                  <div className="course-info">
                    <h5>
                      <img src={profile} className="w-10" alt=""/> Stuck in Lesson 3, need help!
                    </h5>
                    <p>Friendship to connection an am considered difficult. Country met pursuit lasting moments why calling certain the. Middletons
                      our way understood law. Among state cease how and sight since shall.</p>
                  </div>
                  <div className="course_det bl-5">
                    <h4>COURSE</h4>
                    <p>Employee Onboarding and Training</p>
                  </div>
                </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
        </main>
    );
}
}
export default PublishLessonContent;


