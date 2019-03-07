import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom'
var courseImg = require('../../../src/assets/images/study.jpg');

const HomePageLessonsGrid = (props) => {
  var createLessonsList = function (lessons) {
    var i = 0;
    var j = 0;
    return (
      <div className="col-md-3" key={i++}>

        <div className="card bg-dark text-white lesson_grid">
          <Link to="/ViewLesson">
            <img src={courseImg} className="card-img" alt="..."></img>
          </Link>
          <div className="card-img-overlay study-overlay d-flex align-items-end flex-column p-b-10">
            <div>
              <p className="f-s-10 m-b-5 w-100 mr-auto mt-auto text-warning">Published</p>
              <h5 className="card-title m-b-5 small w-100 text-white">{lessons.title}</h5>
              <p className="f-s-10 m-b-5 w-100 text-warning">By Andrew Scott</p>
              <p className="f-s-10 m-b-5 w-100 text-warning">378 Views, 83 Favourites, 43 Saved for later</p>
              <ul className="lesson_grid_list w-100">
                <li className="f-s-12">
                  <a href="#">
                    <i className="far fa-edit" key={j++}></i> Edit</a>
                </li>
                <li className="f-s-12">
                  <a href="#">
                    <i className="far fa-trash-alt" key={j++}></i> Delete</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  };
  return (
    <ul className="container less_grid">
      <li className="row" key={0}>
        {props.lessons.data.map(createLessonsList, this)}
      </li>
      <li className="row" key={1}>
        <button type="button" className="btn btn-light shadow mx-auto">Load More...</button>
      </li>
    </ul>
  );
}
module.exports = HomePageLessonsGrid;


