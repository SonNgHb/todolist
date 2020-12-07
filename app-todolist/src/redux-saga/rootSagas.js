import { all } from 'redux-saga/effects';
import {getStudentDataWatcher, postStudentDataWatch, deleteStudentDataWatch, editStudentDataWatch, changeStatusDataWatch} from './index';

export default function* rootSagas() {
    yield all([
        getStudentDataWatcher(),
        postStudentDataWatch(),
        deleteStudentDataWatch(),
        editStudentDataWatch(),
        changeStatusDataWatch(),
    ])
}