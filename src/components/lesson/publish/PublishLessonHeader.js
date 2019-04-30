import React, { PropTypes } from "react";
class PublishLessonHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      history: { goBack }
    } = this.props;

    return (
      <main role="main">
        <div className="container-fluid create_less bg-light fixed-top">
          <div className="row">
            <div
              className="col-lg-1 col-md-1 col-2 text-center"
              onClick={goBack}
            >
              <a className="text-dark pt-2" href="#">
                <i className="fas fa-times" />
              </a>
            </div>
            <div className="col-lg-10 col-md-9 col-6">
              <div className="row">
                <div className="col-md-1 col-1 text-center">
                  <i className="far fa-sticky-note fa-1x" />
                </div>
                <div className="col-md-2 col-4">
                  <h6 className="p-t-14">
                    CREATE NEW LESSON <br /> <span>STEP 1 of 2</span>
                  </h6>
                </div>
                <div className="col-md-6 col-2">
                  <i className="fas fa-circle fa-xs text-info" />
                  <i className="far fa-circle fa-xs text-info" />
                </div>
              </div>
            </div>
            <div className="col-lg-1 col-md-2 col-4 text-info">
              <h6 className="p-t-14">LESSON PUBLISHED</h6>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default PublishLessonHeader;
