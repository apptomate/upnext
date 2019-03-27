import React, { Fragment } from 'react';
import ReactQuill from 'react-quill';

const TextSection = (props) => {
    const { header, body, handleSlideInputBlur, handleSlideInputs } = props
    return <Fragment>
        <div className="form-group">
            <input name="header" type="text" value={header} onBlur={e=>handleSlideInputBlur(e.target.value, 'header')} onChange={handleSlideInputs} className="form-control pl-4 pr-4 pt-5 pb-5" placeholder="Add a header"></input>
            {/* <ReactQuill
                value={header}
                onChange={(value) => handleSlideInputs(value, 'header')}
                onBlur={(value) => handleSlideInputBlur(value, 'header')}
                modules={modules}
                formats={formats}
                theme={"snow"}
            /> */}
        </div>
        <div style={{height:'350px'}} className="form-group mb-0">
            <ReactQuill
                value={body}
                onChange={(value) => handleSlideInputs(value, 'body')}
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