import React, { PropTypes } from 'react';

const MainFooter = () => {
  return (
    <footer className="footer mt-auto py-3 border-top">
      <div className="container">
        <div className="row pb-3">
          <div className="col-md-6 col">
            <span className="text-danger font-weight-bold">UpNext</span>
          </div>
          <div className="col-md-6 col text-right">
            <nav className="social-links">
              <a href="#">
                <i className="text-black-50 fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="text-black-50 fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="text-black-50 fab fa-instagram"></i>
              </a>
            </nav>
          </div>
        </div>
        <div className="row pb-1 pt-3 border-top f-s-14 copy">
          <div className="col-md-6 col-sm-12">
            <nav className="social-links">
              <a href="#" className="text-body">
                About
            </a>
              <a href="#" className="text-body">
                Career
            </a>
              <a href="#" className="text-body">
                Terms of use
            </a>
              <a href="#" className="text-body">
                Privacy Policy
            </a>
            </nav>
          </div>
          <div className="col-md-6 col-sm-12 text-right font-weight-bold">
            Copyright &copy; 2019 upnext. All rights reserved.
        </div>
        </div>
      </div>
    </footer>
  );
}
module.exports = MainFooter;


