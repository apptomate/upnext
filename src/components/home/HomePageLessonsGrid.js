import React, { PropTypes, Fragment } from 'react';
import { Link } from 'react-router-dom'
import shortid from 'shortid';

var courseImg = require('../../../src/assets/images/study.jpg');

const HomePageLessonsGrid = (props) => {
  const { lessons } = props;
  const listCollection = [];
  var listrow = [];
  lessons.data.map((value, index) => {    
      if (listrow.length < 4)
        listrow.push(value)
      if (listrow.length == 4 || (lessons.data.length-1) == index) {
        listCollection.push(listrow);
        listrow = [];
      }
  })
  return (
    <ul className="container less_grid">      
        {listCollection.map((value) => {
          return renderLessonsList(value || []) 
        })}      
      <li className="row" >
        <button type="button" className="btn btn-light shadow mx-auto">Load More...</button>
      </li>
    </ul>
  );
}

const renderLessonsList = (lessons) => {

  return (
    <li className="row" key={shortid.generate()}>
      {
        lessons.length < 1 ?
          <p> No lessons Available</p>
          :
          lessons.map(lesson =>
            <Fragment key={shortid.generate()}>
              <div className="col-md-3 grid-height">
                <div className="card bg-dark text-white lesson_grid">
                  <Link to="/ViewLesson">
                    <img src={courseImg} className="card-img" alt="..."></img>
                  </Link>
                  <div className="card-img-overlay study-overlay d-flex align-items-end flex-column p-b-10">
                    <div>
                      <p className="f-s-10 m-b-5 w-100 mr-auto mt-auto text-warning">Published</p>
                      <h5 className="card-title m-b-5 small w-100 text-white">{lesson.title}</h5>
                      <p className="f-s-10 m-b-5 w-100 text-warning">By Andrew Scott</p>
                      <p className="f-s-10 m-b-5 w-100 text-warning">378 Views, 83 Favourites, 43 Saved for later</p>
                      <ul className="lesson_grid_list w-100">
                        <li className="f-s-12">
                          <a href="#">
                            <i className="far fa-edit"></i> Edit</a>
                        </li>
                        <li className="f-s-12">
                          <a href="#">
                            <i className="far fa-trash-alt"></i> Delete</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          )
      }
   </li>
  )
};

export default HomePageLessonsGrid;


