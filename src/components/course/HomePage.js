import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import MainHeader from "../common/header/MainHeader";
import NavScroll from "../common/header/NavScroll";
import HomePageHeader from "./HomePageHeader";
import HomePageCoursesGrid from "./HomePageCoursesGrid";
import { loadCourses } from "../../actions";

import "../../assets/css/mystyle.css";
import "../../assets/css/helper.css";
import "../../assets/css/offcanvas.css";
import "../../assets/js/offcanvas.js";
import "../../assets/js/jquery-slim.min.js";

const css = `.content {padding-left:10px}`;

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageOptions: {
        pageNumber: 1,
        title: ""
      }
    };
    this.loadmore = this.loadmore.bind(this);
  }
  componentDidMount() {
    this.props.loadCourses(this.state.pageOptions);
  }

  loadmore() {
    window.scrollBy({ top: -200, behavior: "smooth" });
    this.setState(
      ({ pageOptions }) => ({
        pageOptions: { ...pageOptions, pageNumber: pageOptions.pageNumber + 1 }
      }),
      // , () => console.log(this.state))
      () => this.props.loadCourses(this.state.pageOptions, true)
    );
  }

  // loadCourses(){
  //   this.props.loadCourses(this.state.pageOptions)
  // }

  render() {
    const { courses } = this.props;
    console.warn(this.props);
    return (
      <div className="home">
        <MainHeader />
        <NavScroll />
        <HomePageHeader courses={courses} />
        <ul className="container less_grid">
          <HomePageCoursesGrid
            loadMoreHandler={this.loadmore}
            courses={courses}
          />
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    courses: state.courses
  };
};

export default connect(
  mapStateToProps,
  { loadCourses }
)(HomePage);
