import React, { Fragment } from 'react'
import { pure } from 'recompose'

const sectionTypes = (props) => {
    return <Fragment>
            <div {...props} className="row m-0">
                <div className="col-4 bg-light border addslideActive">
                    <p><i className="fas fa-font"></i></p>
                    <p>Text</p>
                </div>
                <div className="col-4 bg-light border">
                    <p><i className="fas fa-font"></i> +
                  <i className="fas fa-image"></i></p>
                    <p>Text + Image</p>
                </div>
                <div className="col-4 bg-light border">
                    <p><i className="fas fa-image"></i></p>
                    <p>Image</p>
                </div>
                <div className="col-4 bg-light border">
                    <p>
                        <i className="fas fa-video"></i>
                    </p>
                    <p>Video</p>
                </div>
                <div className="col-4 bg-light border">
                    <p>
                        <i className="fas fa-question-circle"></i>
                    </p>
                    <p>Question</p>
                </div>
            </div>
    </Fragment>
}

export default pure(sectionTypes);