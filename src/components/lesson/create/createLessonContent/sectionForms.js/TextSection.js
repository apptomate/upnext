import React, { Fragment } from 'react';
import ReactQuill from 'react-quill';

const TextSection = (props) => {
    const { header, body, handleSlideInputBlur, handleSlideInputs } = props
    return <Fragment>
        <div className="form-group">
            {/* <input
                name="header"
                type="text"
                value={header}
                onBlur={e => handleSlideInputBlur(e.target.value, 'header')}
                onChange={(value) => handleSlideInputs(value, 'header')}
                className="form-control pl-4 pr-4 pt-5 pb-5"
                placeholder="Add a header"
            /> */}
            <ReactQuill style={{ height: '65px' }}
                value={header}
                onChange={(value) => handleSlideInputs(value, 'header')}
                onBlur={(value) => handleSlideInputBlur(value, 'header')}
                modules={{ toolbar: false }}
                // formats={[ [{bold : true}] ]}
                // modules={modules}
                // formats={formats}
                theme={"snow"}
            />
        </div>
        <div className="form-group mb-0">
            <ReactQuill style={{ height: '350px' }}
                value={body}
                onChange={(value) => { handleSlideInputs(value, 'body') }}
                onBlur={(value) => handleSlideInputBlur(value, 'body')}
                modules={modules}
                formats={formats}
                theme={"snow"}
            />
            {/* <textarea name="body" value={body} onBlur={handleSlideInputBlur} onChange={handleSlideInputs} className="form-control pl-4 pr-4 pt-4 pb-5" rows="10" placeholder="Enter body text"></textarea> */}
        </div>
    </Fragment>
}

export default TextSection;


const modules = {
    toolbar: {
        container: "#toolbar"
    }
};

const formats = [
    "header",
    "font",
    "size",
    "bold",
    "align",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color"
];