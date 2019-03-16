import React, { PropTypes } from 'react';

const CreateQuizContent = () => {
    return (
        <div>
            <div className="container-fluid bg-gradient-light">
                <div className="row">
                    <div className="container">
                        <div className="row mt-5 mb-5 m-t-75">
                            <div className="col-lg-5">
                                <h6>Lesson Title</h6>
                                <h4 className="text-dark">Employee on-boarding and training</h4>
                            </div>
                            <div className="col-lg-7">
                                <ul className="nav nav-tabs q_tabs float-right" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Q1</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Q2</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Q3</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            

  <div className="container p-t-50 p-b-50">
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <form action="">
            <div className="tab-content quiz_ques m-b-30" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="form-group m-b-50">
                        <label className="font-weight-bold">Email address</label>
                        <input type="text" className="form-control" placeholder="Enter your Question?"></input>
                    </div>
                    <h3 className="f-s-16 f-w-700">Options</h3>
                    <div className="custom-control custom-checkbox pt-4 pb-4 border-bottom">
                        <input type="checkbox" className="custom-control-input" id="customCheck1"></input>
                        <label className="custom-control-label" for="customCheck1">Option 1</label>
                        <span className="float-right">
                            <i className="fas fa-check"></i> Correct Answer
                        </span>
                    </div>
                    <div className="custom-control custom-checkbox pt-4 pb-4 border-bottom">
                        <input type="checkbox" className="custom-control-input" id="customCheck2"></input>
                        <label className="custom-control-label" for="customCheck2">Option 2</label>
                        <span className="float-right">
                            <i className="fas fa-check"></i> Correct Answer
                        </span>
                    </div>
                    <div className="custom-control custom-checkbox pt-4 pb-4 border-bottom">
                        <input type="checkbox" className="custom-control-input" id="customCheck3"></input>
                        <label className="custom-control-label" for="customCheck3">Option 3</label>
                        <span className="float-right">
                            <i className="fas fa-check"></i> Correct Answer
                        </span>
                    </div>
                    <div className="custom-control custom-checkbox pt-4 pb-4 border-bottom">
                        <input type="checkbox" className="custom-control-input" id="customCheck4"></input>
                        <label className="custom-control-label" for="customCheck1">Option 4</label>
                        <span className="float-right">
                            <i className="fas fa-check"></i> Correct Answer
                        </span>
                    </div>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div className="form-group m-b-50">
                        <label className="font-weight-bold">Email address</label>
                        <input type="text" className="form-control" placeholder="Enter your Question?"></input>
                    </div>
                    <h3 className="f-s-16 f-w-700">Options</h3>
                    <div className="custom-control custom-checkbox pt-4 pb-4 border-bottom">
                        <input type="checkbox" className="custom-control-input" id="customCheck5"></input>
                        <label className="custom-control-label" for="customCheck5">Option 1</label>
                        <span className="float-right">
                            <i className="fas fa-check"></i> Correct Answer
                        </span>
                    </div>
                    <div className="custom-control custom-checkbox pt-4 pb-4 border-bottom">
                        <input type="checkbox" className="custom-control-input" id="customCheck6"></input>
                        <label className="custom-control-label" for="customCheck6">Option 2</label>
                        <span className="float-right">
                            <i className="fas fa-check"></i> Correct Answer
                        </span>
                    </div>
                    <div className="custom-control custom-checkbox pt-4 pb-4 border-bottom">
                        <input type="checkbox" className="custom-control-input" id="customCheck7"></input>
                        <label className="custom-control-label" for="customCheck7">Option 3</label>
                        <span className="float-right">
                            <i className="fas fa-check"></i> Correct Answer
                        </span>
                    </div>
                    <div className="custom-control custom-checkbox pt-4 pb-4 border-bottom">
                        <input type="checkbox" className="custom-control-input" id="customCheck8"></input>
                        <label className="custom-control-label" for="customCheck8">Option 4</label>
                        <span className="float-right">
                            <i className="fas fa-check"></i> Correct Answer
                        </span>
                    </div>
                </div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <div className="form-group m-b-50">
                        <label className="font-weight-bold">Email address</label>
                        <input type="text" className="form-control" placeholder="Enter your Question?"></input>
                    </div>
                    <h3 className="f-s-16 f-w-700">Options</h3>
                    <div className="custom-control custom-checkbox pt-4 pb-4 border-bottom">
                        <input type="checkbox" className="custom-control-input" id="customCheck9"></input>
                        <label className="custom-control-label" for="customCheck9">Option 1</label>
                        <span className="float-right">
                            <i className="fas fa-check"></i> Correct Answer
                        </span>
                    </div>
                    <div className="custom-control custom-checkbox pt-4 pb-4 border-bottom">
                        <input type="checkbox" className="custom-control-input" id="customCheck10"></input>
                        <label className="custom-control-label" for="customCheck10">Option 2</label>
                        <span className="float-right">
                            <i className="fas fa-check"></i> Correct Answer
                        </span>
                    </div>
                    <div className="custom-control custom-checkbox pt-4 pb-4 border-bottom">
                        <input type="checkbox" className="custom-control-input" id="customCheck11"></input>
                        <label className="custom-control-label" for="customCheck11">Option 3</label>
                        <span className="float-right">
                            <i className="fas fa-check"></i> Correct Answer
                        </span>
                    </div>
                    <div className="custom-control custom-checkbox pt-4 pb-4 border-bottom">
                        <input type="checkbox" className="custom-control-input" id="customCheck12"></input>
                        <label className="custom-control-label" for="customCheck12">Option 4</label>
                        <span className="float-right">
                            <i className="fas fa-check"></i> Correct Answer
                        </span>
                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-primary f-s-12 rounded-pill pr-4 pl-4 pt-2 pb-2">
                <i className="fas fa-plus m-r-5"></i> ADD NEXT QUESTION</button>
        </form>
      </div>
    </div>
	</div>
        </div>
    );
};
export default CreateQuizContent;


