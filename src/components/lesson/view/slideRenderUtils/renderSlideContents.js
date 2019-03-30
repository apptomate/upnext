import React, { Fragment } from 'react';
import ReactQuill from 'react-quill';

function RenderSlideContents(props) {
    const { slide: { sections } } = props;
    let { header = '', body = '' } = JSON.parse(sections[0].content)
    return <Fragment>
        <div className="row">
            <div className="col-lg-12">
                <div className="carousel-caption d-none d-md-block text-dark text-left">
                    <h3 style={{ textAlign: "center", fontWeight:"bold" }} >{strip(header)}</h3>
                    <ReactQuill
                        modules={{ toolbar: false }}
                        defaultValue={body}
                        readOnly
                    />
                </div>
            </div>
        </div>
    </Fragment>
}
const strip = (html) => {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
}
export default RenderSlideContents;