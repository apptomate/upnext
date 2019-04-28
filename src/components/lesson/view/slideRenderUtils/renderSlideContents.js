import React, { Fragment } from 'react';
import ReactQuill from 'react-quill';
import { stripHTML as strip } from '../../../../helpers/methods';
import YouTubePlayer from 'react-youtube';

function RenderSlideContents(props) {
    const { slide: { sections, layout ='' }, classes = '' } = props;
    console.error(props)
    switch (layout.toUpperCase()) {
        case 'TEXT':
        return <TEXTSECTION props={props} />
        break;
        case 'VIDEO':
        return <VIDEOSECTION props={props} />
        break;
        
        default:
        return 'Invalid section'
        break;
    }
}
export default RenderSlideContents;

const TEXTSECTION = ({props}) => {
    const { slide: { sections, layout ='' }, classes = '' } = props;
    const { header = '', body = '' } = JSON.parse(sections[0].content)
    return <Fragment>
    <h3 style={{ textAlign: "center", fontWeight: "bold" }} >{strip(header)}</h3>
    <ReactQuill
        modules={{ toolbar: false }}
        value={body}
        readOnly
        className={`quillBody ${classes}`}
    />
</Fragment>
}

const opts = {
    height: '100%',
    width: '100%',
    // playerVars: { // https://developers.google.com/youtube/player_parameters
    //   autoplay: 1
    // }
  };

const VIDEOSECTION = ({props}) => {
    const { slide: { sections }, classes = '' } = props;
    let sectionContent = sections[0].video
    const { providerMediaId } = typeof sectionContent =='string' ? JSON.parse(sectionContent) : sectionContent

    let _onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    return <Fragment>
    <YouTubePlayer 
    videoId={providerMediaId}
    opts={opts}
    onReady={_onReady}
     />
</Fragment>
}