import React, { Component, PropTypes } from 'react';

const NavScroll = () => {
  return (
    <div className="nav-scroller bg-white shadow-sm">
      <nav className="nav nav-underline justify-content-center">
        <a className="nav-link" href="#">Lessons</a>
        <a className="nav-link active" href="#">Courses</a>
        <a className="nav-link" href="#">Career Path</a>
      </nav>
    </div>
  );
}

module.exports = NavScroll;
