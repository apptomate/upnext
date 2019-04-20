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
  <div className="col-lg-2">
    <div id="toolbar" className="bg-white box-shadow p-4 m-t-27">
    <h6>options</h6>
    <select className="ql-header" defaultValue={""} onChange={e => e.persist()}>
      <option value="1" />
      <option value="2" />
      <option value="" />
    </select>
    <br />
    <button className="ql-bold col-4" />
    <button className="ql-underline col-4" />
    <button className="ql-italic col-4" />
    <br />
    <button type="button" className="ql-align col-4" value="" />
    <button type="button" className="ql-align col-4" value="center" />
    <button type="button" className="ql-align col-4" value="right" />
    <br />
    <button className="ql-list col-4" value="ordered" />
    <button className="ql-list col-4" value="bullet" />
    <button className="ql-link col-4" />
    <br />
    <button className="ql-color col-4" value="violet" style={{ backgroundColor: 'violet' }} />
    <button className="ql-color col-4" value="grey" style={{ backgroundColor: 'grey' }} />
    <button className="ql-color col-4" value="green" style={{ backgroundColor: 'green' }} />
    <br />
    <button className="ql-color col-4" value="red" style={{ backgroundColor: 'red' }} />
    <button className="ql-color col-4" value="yellow" style={{ backgroundColor: 'yellow' }} />
    <button className="ql-color col-4" value="blue" style={{ backgroundColor: 'blue' }} />
    <br />
  </div>
  </div>
);

export default pure(editorOptions)