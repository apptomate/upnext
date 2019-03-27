import React, { Fragment } from 'react';
import { pure } from 'recompose'

// const editorOptions = () => {

//     return <Fragment>
//         <div className="col-lg-2">
//             <h6>Options</h6>
//             <div className="p-5 bg-white box-shadow">
//                 <div className="row">
//                     <div className="col text-center p-1 border">
//                         <i className="fas fa-bold"></i>
//                     </div>
//                     <div className="col text-center p-1 border">
//                         <i className="fas fa-underline"></i>
//                     </div>
//                     <div className="col text-center p-1 border">
//                         <i className="fas fa-italic"></i>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col text-center p-1 border">
//                         <i className="fas fa-align-left"></i>
//                     </div>
//                     <div className="col text-center p-1 border">
//                         <i className="fas fa-align-center"></i>
//                     </div>
//                     <div className="col text-center p-1 border">
//                         <i className="fas fa-align-right"></i>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col text-center p-1 border">
//                         <i className="fas fa-list-ol"></i>
//                     </div>
//                     <div className="col text-center p-1 border">
//                         <i className="fas fa-list-ul"></i>
//                     </div>
//                     <div className="col text-center p-1 border">
//                         <i className="fas fa-link"></i>
//                     </div>
//                 </div>
//                 <div className="row m-b-10">
//                     <div className="col text-center p-1 border">
//                         <i className="fas fa-font fa-xs"></i>
//                     </div>
//                     <div className="col text-center p-1 border">
//                         <i className="fas fa-font fa-sm"></i>
//                     </div>
//                     <div className="col text-center p-1 border">
//                         <i className="fas fa-font fa-md"></i>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col text-center p-3 border bg-primary"></div>
//                     <div className="col text-center p-3 border bg-secondary"></div>
//                     <div className="col text-center p-3 border bg-success"></div>
//                 </div>
//                 <div className="row">
//                     <div className="col text-center p-3 border bg-danger"></div>
//                     <div className="col text-center p-3 border bg-warning"></div>
//                     <div className="col text-center p-3 border bg-info"></div>
//                 </div>
//             </div>
//         </div>
//     </Fragment>
// }


const editorOptions = () => (
    <div id="toolbar">
      <select className="ql-header" defaultValue={""} onChange={e => e.persist()}>
        <option value="1" />
        <option value="2" />
        <option selected />
      </select>
<br/>
      <select className="ql-color">
        <option value="red" />
        <option value="green" />
        <option value="blue" />
        <option value="orange" />
        <option value="violet" />
        <option value="#d0d1d2" />
        <option selected />
      </select>
      <button className="ql-bold" />
      <button className="ql-italic" />
      </div>
  );

export default pure(editorOptions)