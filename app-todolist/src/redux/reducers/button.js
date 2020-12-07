import * as types from '../constants/actionTypes';
const initialState = 'all';

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.BUTTON_TYPE:
            return action.button;
        default: return state;
    }
};

export default myReducer;