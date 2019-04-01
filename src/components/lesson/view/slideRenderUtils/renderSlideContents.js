import React, { Fragment } from 'react';
import ReactQuill from 'react-quill';
import { stripHTML as strip } from '../../../../helpers/methods';

function RenderSlideContents(props) {
    const { slide: { sections }, classes = '' } = props;
    let { header = '', body = '' } = JSON.parse(sections[0].content)
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
export default RenderSlideContents;