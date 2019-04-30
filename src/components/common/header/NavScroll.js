import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";
import { COURSE_HOME_URI, LEARNING_PATH } from "../../../helpers/constants";

const NavScroll = props => {
  let getClassName = path => {
    let classNames = ["nav-link"];
    if (window.location.pathname === path) {
      classNames.push("active");
    }
    return classNames.join(" ");
  };
  return (
    <div className="nav-scroller bg-white shadow-sm">
      <nav className="nav nav-underline justify-content-center">
        <Link to="/" className={getClassName("/")}>
          Lessons
        </Link>
        <Link to={COURSE_HOME_URI} className={getClassName(COURSE_HOME_URI)}>
          Courses
        </Link>
        <Link to="/" className={getClassName(LEARNING_PATH)}>
          Career Path
        </Link>
      </nav>
    </div>
  );
};

export default NavScroll;
