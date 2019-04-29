import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";

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
        <Link to="/course" className={getClassName("/course")}>
          Courses
        </Link>
        <Link to="/" className={getClassName("/careerPath")}>
          Career Path
        </Link>
      </nav>
    </div>
  );
};

export default NavScroll;
