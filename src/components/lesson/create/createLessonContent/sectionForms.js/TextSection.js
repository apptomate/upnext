import React, { Fragment } from 'react';

const TextSection = (props) => {
    const {header, body,handleSlideInputBlur, handleSlideInputs } = props
return <Fragment>
        <div className="form-group">
            <input name="header" type="text" value={header} onBlur={handleSlideInputBlur} onChange={handleSlideInputs} className="form-control pl-4 pr-4 pt-5 pb-5" placeholder="Add a header"></input>
        </div>
        <div className="form-group mb-0">
            <textarea name="body" value={body} onBlur={handleSlideInputBlur} onChange={handleSlideInputs} className="form-control pl-4 pr-4 pt-4 pb-5" rows="10" placeholder="Enter body text"></textarea>
        </div>
    </Fragment>
}

export default TextSection;