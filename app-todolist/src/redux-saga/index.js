import {takeLatest, take, fork, call, put} from 'redux-saga/effects';
import axios from 'axios';
import * as types from './../redux/constants/actionTypes';

//Get du lieu
export function* getStudentDataWatcher() {
    yield takeLatest(types.GET_STUDENT_DATA_REQUEST, getStudentDataWorker);
};

function* getStudentDataWorker() {
    try{
        // khong tra ve du lieu va khong chay xuong'??? ==> do call()
        const _response = yield call(() => getStudents());
        const students = _response.data;
        yield put({type: types.GET_STUDENT_DATA_SUCCESS, students});
    } catch(error) {
        yield put({ type: types.GET_STUDENT_DATA_FAIL, error });
    }
};

function getStudents() {
    return axios.get('http://localhost:3000/students');
}

//Post du lieu
export function* postStudentDataWatch() {
    // debugger;
    yield takeLatest(types.POST_STUDENT_DATA_REQUEST, postStudentDataWorker);
};

function* postStudentDataWorker(data){
    try {
        const {sv} = data;
        yield call(() => postStudent(sv));
        yield put({type: types.POST_STUDENT_DATA_SUCCESS, sv});
    } catch(error) {
        yield put({type: types.POST_STUDENT_DATA_FAIL, error});
    }
}
function* postStudent(sv) {
    return axios({
        method: 'POST',
        url: `http://localhost:3000/students/`,
        data: {
            id: sv.id,
            name: sv.name,
            level: sv.level,
            status: sv.status
        }
    });
}
//Delete
export function* deleteStudentDataWatch() {
    yield takeLatest(types.DELETE_STUDENT_DATA_REQUEST, deleteStudentDataWorker);
};

function* deleteStudentDataWorker(data) {
    try {
        const {id} = data;
        yield call(() => deleteStudent(id));
        yield put({type: types.DELETE_STUDENT_DATA_SUCCESS, id});
    } catch (error) {
        yield put({type: types.DELETE_STUDENT_DATA_FAIL, error});
    }
}
function* deleteStudent(id) {
    return axios({
        method: 'DELETE',
        url: `http://localhost:3000/students/${id}`,
    });
}
//edit
export function* editStudentDataWatch(){
    yield takeLatest(types.EDIT_STUDENT_DATA_REQUEST, editStudentDataWorker);
}
function* editStudentDataWorker(data) {
    try {
        const {sv} = data;
        yield call(() => editStudent(sv));
        yield put({type: types.EDIT_STUDENT_DATA_SUCCESS, sv});
    } catch (error) {
        yield put({type: types.EDIT_STUDENT_DATA_FAIL, error});
    }
}
function* editStudent(sv) {
    return axios({
       method: 'PUT',
       url: `http://localhost:3000/students/${sv.id}`,
        data: {
            id: sv.id,
            name: sv.name,
            level: sv.level,
            status: sv.status
        },
    });
}
//changeStatus
export function* changeStatusDataWatch(){
    yield takeLatest(types.CHANGESTATUS_STUDENT_DATA_REQUEST, changeStatusDataWorker);
}
function* changeStatusDataWorker(data){
    try {
        const {status} = data;
        yield call(() => changeStatus(data));
        yield put({type: types.CHANGESTATUS_STUDENT_DATA_SUCCESS, status});
    } catch(error){
        yield put({type: types.CHANGESTATUS_STUDENT_DATA_FAIL, error});
    }
}
function* changeStatus(data){
    return axios({
       method: 'PUT',
       url: `http://localhost:3000/students/${data.sv.id}`,
        data: {
            id: data.sv.id,
            name: data.sv.name,
            level: data.sv.level,
            status: data.sv.status
        }
    });
}