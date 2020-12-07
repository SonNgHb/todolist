import * as types from '../constants/actionTypes';

export const searchSV = (svSearch) => {
    return {
        type: types.SEARCH_SV,
        svSearch: svSearch,
    }
}
export const sortSV = (orderBy) => {
    return {
        type: types.SORT_SV,
        orderBy: orderBy,
    }
}
export const selectSV = (sv) => {
    return {
        type: types.SELECT_SV,
        sv,
    }
}
export const buttonType = (button) => {
    return {
        type: types.BUTTON_TYPE,
        button: button,
    }
}

export const getStudentData = () => {
    return {type: types.GET_STUDENT_DATA_REQUEST};
};

export const postStudent = (sv) => {
    return {
        type: types.POST_STUDENT_DATA_REQUEST,
        sv,
    };
};
export const deleteStudent = (id) => {
    return {
        type: types.DELETE_STUDENT_DATA_REQUEST,
        id,
    }
}
export const editStudent = (sv) => {
    return {
        type: types.EDIT_STUDENT_DATA_REQUEST,
        sv,
    }
}
export const checkStudent = (status, sv) => {
    return {
        type: types.CHANGESTATUS_STUDENT_DATA_REQUEST,
        status,
        sv,
    }
}
