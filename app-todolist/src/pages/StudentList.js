import React from 'react';
import HeaderText from "../Components/HeaderText";
import Control from "../Components/Control";
import SV from './../Components/SV';
import * as actions from "../redux/actions";
import {connect} from "react-redux";
import { getStatusCustomer } from "./selectors";

class StudentList extends React.Component{

    actionType = (buttonType) => {
        this.props.onButton(buttonType);
    }

    componentDidMount() {
        const {getStudentData} = this.props;
        getStudentData();
    }

    render() {
        // const students = [];
        const { buttonType, dssv} = this.props;
        const dssv1 =Object.values(dssv);

        //dem so luong object trong danh sach
        const dem = Object.keys(dssv1).length;
        return (
            <div>
                <HeaderText/>
                <div className={'Control'}>
                    <Control />
                </div>
                <table border={1} cellSpacing={1} className={'List'}>
                    <tbody>
                    <tr className={'Background'}>
                        <th colSpan={6}>
                            DANH SACH SINH VIEN
                        </th>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr className={'FirstRow'}>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Level</th>
                        <th colSpan={2}>Action</th>
                        <th>Status</th>
                    </tr>
                    </tbody>
                    <tbody>
                    {dssv1.map((sv, index) => {
                            const condition = true;
                            //const {status} = this.props;
                            if ((buttonType === 'completed' && sv.status === false) || (buttonType === 'active' && sv.status === true)) {
                                return null;
                            }
                            if (condition)
                                return (
                                    <SV
                                        dssv1={dssv1}
                                        key={index}
                                        sv={sv}
                                        index = {index}
                                        getIndex={this.getIndex}
                                    />
                                );
                        }
                    )}
                    <tr className={'FirstRow1'}>
                        <td colSpan={3}>Your total task you have been need do: </td>
                        <td colSpan={3}>{dem}</td>
                    </tr>
                    <tr className={'FirstRow'}>
                        <td colSpan={2}>
                            <button type={'text'} className={'FirstRow2'} onClick={() => this.actionType('all')}>All</button>
                        </td>
                        <td>
                            <button type={'text'} className={'FirstRow2'} onClick={() => this.actionType('active')}>Active</button>
                        </td>
                        <td colSpan={3}>
                            <button type={'text'} className={'FirstRow2'} onClick={() => this.actionType('completed')}>Completed</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    debugger;
    return {
        dssv: state.dssv,
        buttonType: state.button,
        //status: getStatusCustomer(state),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onButton: (button) => {
            dispatch(actions.buttonType(button));
        },
        getStudentData: () => {
            dispatch(actions.getStudentData())
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentList);