import React, { Component, PropTypes } from 'react';

const MainHeaderWithNavigation = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-white shadow-sm pt-0 pb-0">
      <a className="navbar-brand text-danger font-weight-bold" href="#">Up Next</a>
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse justify-content-md-center collapse">
        <ul className="navbar-nav ml-auto mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">Content</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Assign Tasks</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Reports</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Admin</a>
          </li>
        </ul>
        <nav className="my-2 my-md-0 header_profile">
          <a href="#" className="text-dark">
            Hi Rahul 
            <span className="course_tutor">
              <img src="./images/profile.jpg" className="rounded-circle float-left" alt=""></img>
            </span>
          </a>
          <a href="#" className="text-black-50">
            <i className="far fa-bell"></i> <span class="badge badge-primary rounded-circle">4</span>
          </a>
          <a className="text-black-50" href="#">
            <i className="fas fa-search"></i>
          </a>
        </nav>
      </div>
      <div className="search-box">
        <button className="dismiss">
          <i className="far fa-times-circle"></i>
        </button>
        <form action="#" role="search">
          <input type="search" placeholder="Search something ..." className="form-control"></input>
        </form>
      </div>
    </nav>
  );
}

export default MainHeaderWithNavigation;