import React, { Component, Fragment} from 'react'

export default class VideoSection extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
    // this.handleChange = this.handleChange(this)
  }
  // handleChange(e){

  // }
  render() {
    const { videoMediaId, body, handleVideoSlideInputBlur, handleVideoSlideInputs } = this.props;
    return <Fragment>
      <form>
        
        <div className="form-group">
            <input
                name="videoMediaId"
                type="text"
                value={videoMediaId}
                onBlur={e => handleVideoSlideInputBlur()}
                onChange={(e) => handleVideoSlideInputs(e.target.value, 'videoMediaId')}
                className="form-control pl-4 pr-4 pt-5 pb-5"
                placeholder="Add youtube video ID"
                />
            </div>
                </form>
    </Fragment>
  }
}