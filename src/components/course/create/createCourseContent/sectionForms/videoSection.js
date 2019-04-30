import React, { Component, Fragment } from "react";
import YouTubePlayer from "react-youtube";

export default class VideoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.handleChange = this.handleChange(this)
  }
  // handleChange(e){

  // }
  render() {
    const {
      providerMediaId,
      body,
      handleVideoSlideInputBlur,
      handleSlideInputs
    } = this.props;
    const opts = {
      height: "500px",
      width: "100%"
    };
    let _onReady = event => {
      event.target.pauseVideo();
    };
    return (
      <Fragment>
        <form>
          <div className="form-group">
            <input
              name="providerMediaId"
              type="text"
              value={providerMediaId}
              onBlur={e => handleVideoSlideInputBlur()}
              onChange={e =>
                handleSlideInputs(e.target.value, "providerMediaId")
              }
              className="form-control pl-4 pr-4 pt-5 pb-5"
              placeholder="Add youtube video ID"
            />
          </div>
          <YouTubePlayer
            videoId={providerMediaId}
            opts={opts}
            onReady={_onReady}
          />
        </form>
      </Fragment>
    );
  }
}
