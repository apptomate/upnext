import * as types from './actionTypes';
import axios from 'axios';
var URLSearchParams = require('url-search-params');

export function loadStudentsListSuccess(students) {
    return { type: types.LOAD_STUDENTSLIST_SUCCESS, students };
}

export function deleteStudentSuccess(student) {
    return { type: types.DELETE_STUDENT_SUCCESS, student }
}

export function addStudentSuccess(student) {
    return { type: types.ADD_STUDENT_SUCCESS, student }
}

export function editStudentSuccess(student) {
    return { type: types.ADD_STUDENT_SUCCESS, student }
}

export function loadStudentsList() {
    return dispatch => {
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        axios.get('http://cogzentappz.com/ReactDemo/API/RestController.php?page_key=list', { headers: headers })
            .then(response => {
                var studentjsondata = {
                    studentslist:[]
                 }
                response.data.output.map( val => 
                {
                    studentjsondata.studentslist.push(val)
                });                
                dispatch(loadStudentsListSuccess(studentjsondata));
                return;
            })
            .catch(error => {
                console.log(error);
            });
    };
}

export function deleteStudent(studentinfo) {
    return dispatch => {
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        var apiURL = 'http://cogzentappz.com/ReactDemo/API/RestController.php?page_key=delete&id=' + studentinfo.student.id;
        axios.get(apiURL, { headers: headers })
            .then(response => {
                var student = {
                    id: studentinfo.student.id
                };
                dispatch(deleteStudentSuccess(student));
                return;
            })
            .catch(error => {
                console.log(error);
            });
    };
}

export function addStudent(studentinfo) {
    return dispatch => {
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        const params = new URLSearchParams();
        params.append('name', studentinfo.student.name);
        params.append('email', studentinfo.student.email);
        params.append('dob', studentinfo.student.dob);
        params.append('phone', studentinfo.student.phone);
        params.append('gender', studentinfo.student.gender);

        var apiURL = 'http://cogzentappz.com/ReactDemo/API/RestController.php?page_key=create';
        axios.post(apiURL, params.toString(), { headers: headers })
            .then(response => {
                var student = {
                    studentinfo
                };
                student.studentinfo.student.id = response.data.studentID;
                dispatch(addStudentSuccess(student));
                return;
            })
            .catch(error => {
                console.log(error);
            });
    };
}


export function editStudent(studentinfo) {
    return dispatch => {
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        const params = new URLSearchParams();
        params.append('id', studentinfo.student.id);
        params.append('name', studentinfo.student.name);
        params.append('email', studentinfo.student.email);
        params.append('dob', studentinfo.student.dob);
        params.append('phone', studentinfo.student.phone);
        params.append('gender', studentinfo.student.gender);
        var apiURL = 'http://cogzentappz.com/ReactDemo/API/RestController.php?page_key=update&id=' + studentinfo.student.id;
        axios.post(apiURL, params.toString(), { headers: headers })
            .then(response => {       
                var studentedit = {
                    studentinfo
                };
                // No need of dispatch, as BootstrapTable is updating the model data.
                //dispatch(editStudentSuccess(studentedit));
                return;
            })
            .catch(error => {
                console.log(error);
            });
    };
}

