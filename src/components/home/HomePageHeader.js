import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom'
var courseImg = require('../../../src/assets/images/study.jpg');

const HomePageHeader = (props) => {
  return (
    <main role="main">
      <div className="container">
        <div className="row">
          <h6 className="h-100 mt-5 mb-4 title_block col-md-9 col-sm-12">
            Discover Content in lessons
            </h6>
          <div className=" col-md-3 mt-5 mb-3 col-sm-12 crt_less">
            <Link to="/CreateLesson">
              <button type="button" className="btn btn-primary btn-sm float-right f-s-12 rounded-pill pr-4 pl-4 pt-2 pb-2">Create a New Lesson</button>
            </Link>

          </div>
        </div>
        <form className="form-inline mt-5 mb-5 searchbar">
          <div className="input-group mb-3 w-100">
            <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
            <div className="input-group-append">
              <span className="input-group-text bg-white border-top-0 border-right-0 border-left-0"><i className="fas fa-arrow-circle-right"></i></span>
            </div>
          </div>
        </form>

        <div className="h-100 mt-5 mb-5">
          <span className="small">{props.lessons.totalItems} Lessons Available</span>
          <div className="dropdown float-right">
            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
              Dropdown button
              </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default HomePageHeader;


