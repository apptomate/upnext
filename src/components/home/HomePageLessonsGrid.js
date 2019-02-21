import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom'
var courseImg = require('../../../src/assets/images/study.jpg');

const HomePageLessonsGrid = () => {
    return (
 <ul className="container less_grid">
    <li className="row">
      <div className="col-md-3">
      <Link to="/ViewLesson">
        <div className="card bg-dark text-white lesson_grid">
          <img src={courseImg} className="card-img" alt="..."></img>
          <div className="card-img-overlay study-overlay d-flex align-items-end flex-column p-b-10">
            <div>
              <p className="f-s-10 m-b-5 w-100 mr-auto mt-auto text-warning">Published</p>
              <h5 className="card-title m-b-5 small w-100 text-white">Metric Manager</h5>
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
        </Link>
      </div>
      <div className="col-md-3">
        <div className="card bg-dark text-white lesson_grid">
          <img src={courseImg} className="card-img" alt="..."></img>
          <div className="card-img-overlay study-overlay d-flex align-items-end flex-column p-b-10">
            <div>
              <p className="f-s-10 m-b-5 w-100 mr-auto mt-auto text-warning">Published</p>
              <h5 className="card-title m-b-5 small w-100 text-white">Metric Manager</h5>
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
      <div className="col-md-3">
        <div className="card bg-dark text-white lesson_grid">
          <img src={courseImg} className="card-img" alt="..."></img>
          <div className="card-img-overlay study-overlay d-flex align-items-end flex-column p-b-10">
            <div>
              <p className="f-s-10 m-b-5 w-100 mr-auto mt-auto text-warning">Published</p>
              <h5 className="card-title m-b-5 small w-100 text-white">Metric Manager</h5>
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
      <div className="col-md-3">
        <div className="card bg-dark text-white lesson_grid">
          <img src={courseImg} className="card-img" alt="..."></img>
          <div className="card-img-overlay study-overlay d-flex align-items-end flex-column p-b-10">
            <div>
              <p className="f-s-10 m-b-5 w-100 mr-auto mt-auto text-warning">Published</p>
              <h5 className="card-title m-b-5 small w-100 text-white">Metric Manager</h5>
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
    </li>
    <li className="row">
      <div className="col-md-3">
        <div className="card bg-dark text-white lesson_grid">
          <img src={courseImg} className="card-img" alt="..."></img>
          <div className="card-img-overlay study-overlay d-flex align-items-end flex-column p-b-10">
            <div>
              <p className="f-s-10 m-b-5 w-100 mr-auto mt-auto text-warning">Published</p>
              <h5 className="card-title m-b-5 small w-100 text-white">Metric Manager</h5>
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
      <div className="col-md-3">
        <div className="card bg-dark text-white lesson_grid">
          <img src={courseImg} className="card-img" alt="..."></img>
          <div className="card-img-overlay study-overlay d-flex align-items-end flex-column p-b-10">
            <div>
              <p className="f-s-10 m-b-5 w-100 mr-auto mt-auto text-warning">Published</p>
              <h5 className="card-title m-b-5 small w-100 text-white">Metric Manager</h5>
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
      <div className="col-md-3">
        <div className="card bg-dark text-white lesson_grid">
          <img src={courseImg} className="card-img" alt="..."></img>
          <div className="card-img-overlay study-overlay d-flex align-items-end flex-column p-b-10">
            <div>
              <p className="f-s-10 m-b-5 w-100 mr-auto mt-auto text-warning">Published</p>
              <h5 className="card-title m-b-5 small w-100 text-white">Metric Manager</h5>
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
      <div className="col-md-3">
        <div className="card bg-dark text-white lesson_grid">
          <img src={courseImg} className="card-img" alt="..."></img>
          <div className="card-img-overlay study-overlay d-flex align-items-end flex-column p-b-10">
            <div>
              <p className="f-s-10 m-b-5 w-100 mr-auto mt-auto text-warning">Published</p>
              <h5 className="card-title m-b-5 small w-100 text-white">Metric Manager</h5>
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
    </li>
    <li className="row">
      <button type="button" className="btn btn-light shadow mx-auto">Load More...</button>
    </li>
  </ul>

    );
}
module.exports = HomePageLessonsGrid;


