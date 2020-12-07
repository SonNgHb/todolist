import  * as types from '../constants/actionTypes';

const initialState = {};
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SELECT_SV:
            return action.sv;
        default: return state;
    }
};

export default myReducer;