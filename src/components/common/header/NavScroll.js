import React, { Component, PropTypes } from 'react';

const NavScroll = () => {
  return (
    <div className="nav-scroller nav-secondary bg-white shadow-sm">
      <nav className="nav nav-underline justify-content-center">
        <a className="nav-link active" href="#">Lessons</a>
        <a className="nav-link" href="#">Courses</a>
        <a className="nav-link" href="#">Learning Path</a>
      </nav>
    </div>
  );
}

export default NavScroll;
