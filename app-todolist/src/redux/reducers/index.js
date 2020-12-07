import {combineReducers} from "redux";
import dssv from './dssv';
import select from './select';
import button from './button';

const myReducer = combineReducers({
    dssv,
    select,
    button,
});
export default myReducer;