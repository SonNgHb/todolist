import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actions from '../redux/actions/index';

class SV extends React.Component {

    setLevel = () => {
        const {sv} = this.props;
        let level1 = 'High';
        if(sv.level === 1)
        {
            level1 = 'Slow';
        }
        else if(sv.level === 2) level1 = 'Medium';
        return level1;
    }

    // function co chuc nang gi
    // tham so dau vao la gi
    // khi truyen xuong se nhan tham so nhu function da khai bao
    handleDelete = (id) => {
        // const  {getIndex, index} = this.props;
        // getIndex(index);
        if(window.confirm('Do you want to delete?')) {
             this.props.onDeleteSV(id);
        }
    }

    handleEdit = (sv) => {
        this.props.onSelectSV(sv);
    }

    handleCheck = (event) => {
        // thay ddooir trang thái của object tương ứng
        const {sv} = this.props;
        sv.status = event.target.checked;
        this.props.onChangeStatus(sv.status, sv);
    }

    render() {
        const {sv, index} = this.props;
        return (
                <tr>
                    <td>{index + 1}</td>
                    <td>{sv.name}</td>
                    <td>{this.setLevel(sv)}</td>
                    <td>
                        <button onClick={() => {this.handleDelete(sv.id)}} className={'Delete'}>Delete</button>
                    </td>
                    <td>
                        <button onClick={() => this.handleEdit(sv, index)} className={'Edit'}>Edit</button>
                    </td>
                    <td>
                        <input type={'checkbox'} defaultChecked={sv.status} onChange={this.handleCheck} />
                    </td>
                </tr>
        );
    }
}

SV.propTypes = {
    dssv: PropTypes.array,
    sv: PropTypes.object,
    index: PropTypes.number,
    handleDelete: PropTypes.func,
    handleEdit: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteSV: (id) => {
            dispatch(actions.deleteStudent(id));
        },
        onSelectSV: (sv) => {
            dispatch(actions.selectSV(sv));
        },
        onChangeStatus: (status, sv) => {
            dispatch(actions.checkStudent(status, sv));
        }
    }
}
export default connect(null, mapDispatchToProps)(SV);