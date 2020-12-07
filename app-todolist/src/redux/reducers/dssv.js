import * as types from '../constants/actionTypes';

const initialState = [
];
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        // case types.LIST_SV:
        //     return state;
        // case types.ADD_SV:
        //     debugger;
        //     if(!action.index) {
        //         const newSV = {
        //             name: action.sv.name,
        //             level: +action.sv.level,
        //             status: action.sv.status,
        //         };
        //         state.push(newSV);
        //     }
        //     return [...state];
        // case types.EDIT_SV:
        //     debugger;
        //     if(action.index) {
        //         const oldSV = {
        //             name: action.sv.name,
        //             level: +action.sv.level,
        //             status: action.sv.status,
        //         };
        //         const index = action.index;
        //         state[index] = oldSV;
        //     }
        //     return [...state];
        // // case types.DELETE_SV:
        // //     debugger;
        // //     const indexDelete = action.index;
        // //         if(action.index === indexDelete)
        // //         {
        // //             state.splice(indexDelete, 1);
        // //         }
        // //     return [...state];
        case types.SEARCH_SV:
            const svSearch = action.svSearch;
            let dssv1 = [];
            state.map((item) => {
                if(item.name.toLowerCase().indexOf(svSearch) !== -1) {
                    dssv1.push(item);
                }
            });
            return [...dssv1];
        case types.SORT_SV:
            const orderBy = action.orderBy;
            const newState1 = [...state];
            if(orderBy === 'name') {
                newState1.sort((a,b) => (a.name > b.name) ? 1 : -1);
            }
            else if(orderBy === 'level') {
                newState1.sort((c,d) => (c.level > d.level) ? 1 : -1);
            }
            return [...newState1];
        case types.GET_STUDENT_DATA_SUCCESS:
            const data = action.students;
            return [...data];
        case types.POST_STUDENT_DATA_SUCCESS:
            const list = [...state];
            list.push(action.sv);
            return [...list];
        case types.DELETE_STUDENT_DATA_SUCCESS:
            const listDelete = [...state];
            {
                listDelete.splice(action.id, 1);
            }
            return [...listDelete];
        case types.EDIT_STUDENT_DATA_SUCCESS:
            const listEdit = [...state];
            const svEdit = {
                id: action.sv.id,
                name: action.sv.name,
                level: +action.sv.level,
                status: action.sv.status,
            }
            const liEdit = listEdit.filter((sv) => {
               return sv.id = svEdit.id;
            });
            return [...liEdit];
        case types.CHANGESTATUS_STUDENT_DATA_SUCCESS:
            const listStatus = [...state];
            const status = action.status;
            const svStatus = {
                id: action.sv.id,
                name: action.sv.name,
                level: +action.sv.level,
                status: status,
            }
            const liStatus = listStatus.filter((sv) => {
                return sv.id = svStatus.id;
            });
            return [...liStatus];
        default: return state;
    }
}

export default myReducer;